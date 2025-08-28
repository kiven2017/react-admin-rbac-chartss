import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/Table'
import { DynamicForm } from '../../components/Form'
import PermissionGate from '../../auth/PermissionGate'
import { list, create } from '../../lib/api'

export default function 安全与隐私基于趋势提升系统安全性_隐私保护() {
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
    "column": "policy_id",
    "label": "policy_id",
    "type": "string"
  },
  {
    "column": "policy_name",
    "label": "policy_name",
    "type": "string"
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
    "field": "policy_id",
    "label": "policy_id",
    "type": "string",
    "required": true
  },
  {
    "field": "policy_name",
    "label": "policy_name",
    "type": "string",
    "required": false
  },
  {
    "field": "effective_from",
    "label": "effective_from",
    "type": "date",
    "required": false
  },
  {
    "field": "effective_to",
    "label": "effective_to",
    "type": "date",
    "required": false
  },
  {
    "field": "data_retention_days",
    "label": "data_retention_days",
    "type": "number",
    "required": false
  },
  {
    "field": "consent_required",
    "label": "consent_required",
    "type": "boolean",
    "required": false
  },
  {
    "field": "consent_version",
    "label": "consent_version",
    "type": "string",
    "required": false
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('隐私保护').then(setRows) },[])
  const onSubmit = (data)=>{ create('隐私保护', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">隐私保护</h1>
          <p className="text-muted text-sm">ZKP零知识证明，支持数据最小化</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="隐私保护:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="隐私保护:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="隐私保护:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="隐私保护:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
