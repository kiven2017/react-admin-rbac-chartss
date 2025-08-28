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
    "column": "device_id",
    "label": "device_id",
    "type": "string"
  },
  {
    "column": "serial_number",
    "label": "serial_number",
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
    "field": "device_id",
    "label": "device_id",
    "type": "string",
    "required": true
  },
  {
    "field": "serial_number",
    "label": "serial_number",
    "type": "string",
    "required": false
  },
  {
    "field": "did",
    "label": "did",
    "type": "string",
    "required": false
  },
  {
    "field": "owner_address",
    "label": "owner_address",
    "type": "string",
    "required": false
  },
  {
    "field": "firmware_version",
    "label": "firmware_version",
    "type": "string",
    "required": false
  },
  {
    "field": "lifecycle_status",
    "label": "lifecycle_status",
    "type": "enum",
    "required": false
  },
  {
    "field": "manufactured_at",
    "label": "manufactured_at",
    "type": "date",
    "required": false
  },
  {
    "field": "activated_at",
    "label": "activated_at",
    "type": "datetime",
    "required": false
  },
  {
    "field": "deactivated_at",
    "label": "deactivated_at",
    "type": "datetime",
    "required": false
  },
  {
    "field": "last_seen_at",
    "label": "last_seen_at",
    "type": "datetime",
    "required": false
  },
  {
    "field": "location",
    "label": "location",
    "type": "string",
    "required": false
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('安全与加密配置').then(setRows) },[])
  const onSubmit = (data)=>{ create('安全与加密配置', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">安全与加密配置</h1>
          <p className="text-muted text-sm">管理后端与设备/网关之间的 mTLS 认证证书 。根据出口管制要求，为不同区域启用或禁用特定的加密算法 。</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="安全与加密配置:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="安全与加密配置:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="安全与加密配置:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="安全与加密配置:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
