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
    "column": "action",
    "label": "action",
    "type": "enum"
  },
  {
    "column": "actor",
    "label": "actor",
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
  },
  {
    "field": "role_id",
    "label": "role_id",
    "type": "string",
    "required": true
  },
  {
    "field": "role_name",
    "label": "role_name",
    "type": "string",
    "required": false
  },
  {
    "field": "permissions",
    "label": "permissions",
    "type": "string",
    "required": false
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('角色与权限管理').then(setRows) },[])
  const onSubmit = (data)=>{ create('角色与权限管理', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">角色与权限管理</h1>
          <p className="text-muted text-sm">RBAC系统，支持管理员/运营商/审计员角色</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="角色与权限管理:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="角色与权限管理:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="角色与权限管理:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="角色与权限管理:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
