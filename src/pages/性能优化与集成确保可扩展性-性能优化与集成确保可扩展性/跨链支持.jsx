import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/Table'
import { DynamicForm } from '../../components/Form'
import PermissionGate from '../../auth/PermissionGate'
import { list, create } from '../../lib/api'

export default function 性能优化与集成确保可扩展性_跨链支持() {
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
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('跨链支持').then(setRows) },[])
  const onSubmit = (data)=>{ create('跨链支持', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">跨链支持</h1>
          <p className="text-muted text-sm">CCIP协议，实现多链数据桥接</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="跨链支持:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="跨链支持:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="跨链支持:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="跨链支持:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
