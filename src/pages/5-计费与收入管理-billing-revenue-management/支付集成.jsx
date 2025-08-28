import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/Table'
import { DynamicForm } from '../../components/Form'
import PermissionGate from '../../auth/PermissionGate'
import { list, create } from '../../lib/api'

export default function 5_支付集成() {
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
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('支付集成').then(setRows) },[])
  const onSubmit = (data)=>{ create('支付集成', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">支付集成</h1>
          <p className="text-muted text-sm">支持稳定币/法币支付，链上结算</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="支付集成:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="支付集成:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="支付集成:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="支付集成:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
