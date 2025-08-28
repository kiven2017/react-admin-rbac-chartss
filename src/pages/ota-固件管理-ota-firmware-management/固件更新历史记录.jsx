import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/Table'
import { DynamicForm } from '../../components/Form'
import PermissionGate from '../../auth/PermissionGate'
import { list, create } from '../../lib/api'

export default function 3_固件更新历史记录() {
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
    "column": "version",
    "label": "version",
    "type": "string"
  },
  {
    "column": "release_notes",
    "label": "release_notes",
    "type": "text"
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
    "field": "version",
    "label": "version",
    "type": "string",
    "required": true
  },
  {
    "field": "release_notes",
    "label": "release_notes",
    "type": "text",
    "required": false
  },
  {
    "field": "binary_hash",
    "label": "binary_hash",
    "type": "string",
    "required": true
  },
  {
    "field": "binary_url",
    "label": "binary_url",
    "type": "string",
    "required": true
  },
  {
    "field": "rollout_strategy",
    "label": "rollout_strategy",
    "type": "enum",
    "required": false
  },
  {
    "field": "min_supported_hw",
    "label": "min_supported_hw",
    "type": "string",
    "required": false
  },
  {
    "field": "max_supported_hw",
    "label": "max_supported_hw",
    "type": "string",
    "required": false
  },
  {
    "field": "signed_by",
    "label": "signed_by",
    "type": "string",
    "required": false
  },
  {
    "field": "signature",
    "label": "signature",
    "type": "string",
    "required": false
  },
  {
    "field": "approval_multisig_tx",
    "label": "approval_multisig_tx",
    "type": "string",
    "required": false
  },
  {
    "field": "action",
    "label": "action",
    "type": "enum",
    "required": false
  },
  {
    "field": "actor",
    "label": "actor",
    "type": "string",
    "required": false
  },
  {
    "field": "ip",
    "label": "ip",
    "type": "string",
    "required": false
  },
  {
    "field": "tx_hash",
    "label": "tx_hash",
    "type": "string",
    "required": false
  },
  {
    "field": "resource",
    "label": "resource",
    "type": "string",
    "required": false
  },
  {
    "field": "diff",
    "label": "diff",
    "type": "json",
    "required": false
  },
  {
    "field": "occurred_at",
    "label": "occurred_at",
    "type": "datetime",
    "required": false
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('固件更新历史记录').then(setRows) },[])
  const onSubmit = (data)=>{ create('固件更新历史记录', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">固件更新历史记录</h1>
          <p className="text-muted text-sm">提供所有 OTA 更新的详细历史记录，包括版本、哈希、审批人、时间戳等，确保更新过程可被完整审计 。</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="固件更新历史记录:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="固件更新历史记录:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="固件更新历史记录:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="固件更新历史记录:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
