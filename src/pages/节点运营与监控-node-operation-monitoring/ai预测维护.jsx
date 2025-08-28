import React, { useEffect, useMemo, useState } from 'react'
import PermissionGate from '../../auth/PermissionGate'
import ErrorBoundary from '../../components/ErrorBoundary'
import { listByFeature, createByFeature } from '../../lib/api.adapter'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts'
import { DynamicForm } from '../../components/Form'

export default function 4_ai预测维护() {
  const featureSlug = "ai预测维护"
  const [rows, setRows] = useState([])
  const [intervalSec, setIntervalSec] = useState(10)
  const [ts, setTs] = useState(0)

  useEffect(() => { fetchData() }, [])
  useEffect(() => {
    if (!intervalSec) return
    const id = setInterval(fetchData, intervalSec * 1000)
    return () => clearInterval(id)
  }, [intervalSec])

  async function fetchData() {
    try { const data = await listByFeature(featureSlug); setRows(Array.isArray(data)?data:[]) }
    catch (e) { console.error(e) }
    finally { setTs(Date.now()) }
  }

  const series = useMemo(() => buildSeries(rows), [rows, ts])

  function buildSeries(items) {
    const timeKeys = ['collected_at','created_at','updated_at','occurred_at','timestamp']
    const numKeysCandidates = ['latency_ms','cpu_usage','mem_usage','metric_value','block_height','peer_count','count','value']
    const first = items[0] || {}
    const detectedTime = timeKeys.find(k => k in first) || 'created_at'
    const numericKeys = Object.keys(first).filter(k => typeof first[k] === 'number' || numKeysCandidates.includes(k))
    const data = items.map(it => ({ ...it, _t: (it[detectedTime] || '').toString().slice(0,19).replace('T',' ') }))
    return { data, numericKeys: numericKeys.slice(0,3), timeKey: '_t' }
  }

  const [formOpen, setFormOpen] = useState(false)
  const fields = [{ field:'name', label:'name', type:'string', required:true }, { field:'status', label:'status', type:'enum', required:false }]
  const onSubmit = (payload) => createByFeature(featureSlug, payload).then(() => fetchData())

  return (
    <ErrorBoundary>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">AI预测维护</h1>
            <p className="text-muted text-sm">使用ML模型预测节点故障，减少downtime</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted">刷新间隔</label>
            <select className="select" value={intervalSec} onChange={e=>setIntervalSec(Number(e.target.value))}>
              <option value={0}>关闭刷新</option>
              <option value={10}>10s</option>
              <option value={30}>30s</option>
              <option value={60}>60s</option>
            </select>
            <PermissionGate perm="ai预测维护:export"><button className="btn">导出</button></PermissionGate>
            <PermissionGate perm="ai预测维护:create"><button className="btn btn-primary" onClick={()=>setFormOpen(v=>!v)}>新增</button></PermissionGate>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card p-4">
            <div className="text-sm font-medium mb-2">指标图表 (Line)</div>
            <div style={{height:300}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={series.data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={series.timeKey} />
                  <YAxis />
                  <Tooltip />
                  {series.numericKeys[0] ? <Line type="monotone" dataKey={series.numericKeys[0]} dot={false} /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="card p-4">
            <div className="text-sm font-medium mb-2">指标图表 (Area)</div>
            <div style={{height:300}}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={series.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={series.timeKey} />
                  <YAxis />
                  <Tooltip />
                  {series.numericKeys[1] ? <Area type="monotone" dataKey={series.numericKeys[1]} /> : null}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {formOpen && (
          <div>
            <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
            <DynamicForm fields={fields} onSubmit={onSubmit} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
}
