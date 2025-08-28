import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/Table'
import { DynamicForm } from '../../components/Form'
import PermissionGate from '../../auth/PermissionGate'
import { list, create } from '../../lib/api'

export default function Page() {
  const columns = [
  {
    "column": "id",
    "label": "id",
    "type": "uuid"
  },
  {
    "column": "name",
    "label": "name",
    "type": "string"
  },
  {
    "column": "status",
    "label": "status",
    "type": "enum"
  },
  {
    "column": "description",
    "label": "description",
    "type": "text"
  },
  {
    "column": "created_at",
    "label": "created_at",
    "type": "datetime"
  },
  {
    "column": "updated_at",
    "label": "updated_at",
    "type": "datetime"
  },
  {
    "column": "registry_tx_hash",
    "label": "registry_tx_hash",
    "type": "string"
  },
  {
    "column": "onchain_status",
    "label": "onchain_status",
    "type": "enum"
  }
]
  const fields = [
  {
    "field": "id",
    "label": "id",
    "type": "uuid",
    "required": true
  },
  {
    "field": "name",
    "label": "name",
    "type": "string",
    "required": true
  },
  {
    "field": "status",
    "label": "status",
    "type": "enum",
    "required": false
  },
  {
    "field": "description",
    "label": "description",
    "type": "text",
    "required": false
  },
  {
    "field": "created_at",
    "label": "created_at",
    "type": "datetime",
    "required": false
  },
  {
    "field": "updated_at",
    "label": "updated_at",
    "type": "datetime",
    "required": false
  },
  {
    "field": "registry_tx_hash",
    "label": "registry_tx_hash",
    "type": "string",
    "required": false
  },
  {
    "field": "onchain_status",
    "label": "onchain_status",
    "type": "enum",
    "required": false
  },
  {
    "field": "chain",
    "label": "chain",
    "type": "enum",
    "required": false
  },
  {
    "field": "node_id",
    "label": "node_id",
    "type": "string",
    "required": true
  },
  {
    "field": "endpoint",
    "label": "endpoint",
    "type": "string",
    "required": false
  },
  {
    "field": "latency_ms",
    "label": "latency_ms",
    "type": "number",
    "required": false
  },
  {
    "field": "cpu_usage",
    "label": "cpu_usage",
    "type": "number",
    "required": false
  },
  {
    "field": "mem_usage",
    "label": "mem_usage",
    "type": "number",
    "required": false
  },
  {
    "field": "block_height",
    "label": "block_height",
    "type": "number",
    "required": false
  },
  {
    "field": "peer_count",
    "label": "peer_count",
    "type": "number",
    "required": false
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('收入与分成报告').then(setRows) },[])
  const onSubmit = (data)=>{ create('收入与分成报告', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">收入与分成报告</h1>
          <p className="text-muted text-sm">自动生成会计报告，该报告需核对链上收入与数据使用量，并清晰展示给预言机节点运营商的收入分成情况，确保误差在 ±1% 以内 。支持导出CSV/Excel</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="收入与分成报告:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="收入与分成报告:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="收入与分成报告:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="收入与分成报告:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
