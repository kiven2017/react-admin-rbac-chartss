import React, { useEffect, useMemo, useState } from 'react'
import { listByFeature, createByFeature } from '../lib/api.adapter'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts'
import { DynamicForm } from '../components/Form'
export default function P12() {
  const featureSlug="设备健康监控"
  const [rows,setRows]=useState([]); const [intervalSec,setIntervalSec]=useState(10); const [formOpen,setFormOpen]=useState(false)
  useEffect(()=>{ fetchData() },[])
  useEffect(()=>{ if(!intervalSec) return; const id=setInterval(fetchData,intervalSec*1000); return ()=>clearInterval(id) },[intervalSec])
  async function fetchData(){ try{ const data=await listByFeature(featureSlug); setRows(Array.isArray(data)?data:[]) }catch(e){ console.error(e) } }
  const series = useMemo(()=>{ 
    const first=rows[0]||{}; 
    const candidates=['latency_ms','cpu_usage','mem_usage','metric_value','block_height','peer_count','value','count']
    const numeric=Object.keys(first).filter(k=>typeof first[k]==='number'||candidates.includes(k))
    const timeKey = (first['collected_at']?'collected_at':(first['created_at']?'created_at':(first['updated_at']?'updated_at':null)))
    const data = rows.map(it=>({...it,_t:(it[timeKey]||'').toString().slice(0,19).replace('T',' ')}))
    return {data, numericKeys:numeric.slice(0,2), timeKey:'_t'}
  },[rows])
  const fields=[{"field": "id", "label": "id", "type": "uuid", "required": true}, {"field": "name", "label": "name", "type": "string", "required": true}, {"field": "status", "label": "status", "type": "enum", "required": false}, {"field": "description", "label": "description", "type": "text", "required": false}, {"field": "created_at", "label": "created_at", "type": "datetime", "required": false}, {"field": "updated_at", "label": "updated_at", "type": "datetime", "required": false}, {"field": "device_id", "label": "device_id", "type": "string", "required": true}, {"field": "serial_number", "label": "serial_number", "type": "string", "required": true}, {"field": "did", "label": "did", "type": "string", "required": true}, {"field": "owner_address", "label": "owner_address", "type": "string", "required": false}, {"field": "firmware_version", "label": "firmware_version", "type": "string", "required": false}, {"field": "lifecycle_status", "label": "lifecycle_status", "type": "enum", "required": false}, {"field": "activated_at", "label": "activated_at", "type": "datetime", "required": false}, {"field": "last_seen_at", "label": "last_seen_at", "type": "datetime", "required": false}, {"field": "metric_name", "label": "metric_name", "type": "string", "required": false}, {"field": "metric_value", "label": "metric_value", "type": "number", "required": false}, {"field": "collected_at", "label": "collected_at", "type": "datetime", "required": false}]
  const onSubmit=(payload)=>createByFeature(featureSlug,payload).then(fetchData)
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div><h1 className='text-2xl font-semibold'>设备健康监控</h1><p className='text-muted text-sm'>实时监控单个设备的健康状况，包括网络连接状态（Wi-Fi, LTE-M, LoRaWAN ）、电池电量、信号强度和数据上报频率 。</p></div>
        <div className='flex items-center gap-2'>
          <label className='text-sm text-muted'>刷新间隔</label>
          <select className='select' value={intervalSec} onChange={e=>setIntervalSec(Number(e.target.value))}>
            <option value={0}>关闭</option><option value={10}>10s</option><option value={30}>30s</option><option value={60}>60s</option>
          </select>
          <button className='btn btn-primary' onClick={()=>setFormOpen(v=>!v)}>新增</button>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='card p-4'><div className='text-sm font-medium mb-2'>Line</div>
          <div style={{height:300}}>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={series.data} margin={{top:5,right:20,left:0,bottom:5}}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey={series.timeKey} /><YAxis /><Tooltip />
                {series.numericKeys[0]?<Line type='monotone' dataKey={series.numericKeys[0]} dot={false}/>:null}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='card p-4'><div className='text-sm font-medium mb-2'>Area</div>
          <div style={{height:300}}>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={series.data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey={series.timeKey} /><YAxis /><Tooltip />
                {series.numericKeys[1]?<Area type='monotone' dataKey={series.numericKeys[1]}/>:null}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {formOpen && (<div><h2 className='text-lg font-semibold mb-2'>新增/编辑</h2><DynamicForm fields={fields} onSubmit={onSubmit} /></div>)}
    </div>
  )
}
