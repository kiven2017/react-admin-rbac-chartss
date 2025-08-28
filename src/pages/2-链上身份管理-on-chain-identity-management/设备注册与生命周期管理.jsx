import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/Table'
import { DynamicForm } from '../../components/Form'
import PermissionGate from '../../auth/PermissionGate'
import { list, create } from '../../lib/api'

export default function 2_设备注册与生命周期管理() {
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
  useEffect(()=>{ list('设备注册与生命周期管理').then(setRows) },[])
  const onSubmit = (data)=>{ create('设备注册与生命周期管理', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">设备注册与生命周期管理</h1>
          <p className="text-muted text-sm">提供设备注册界面，将设备物理序列号、硬件模块 (SE050 ) 生成的唯一 DID 和公钥进行绑定 。支持完整的设备生命周期操作，包括：关联设备到特定的预言机节点 、更新设备元数据、撤销设备身份 以及根据合规要求删除链上数据 。</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="设备注册与生命周期管理:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="设备注册与生命周期管理:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="设备注册与生命周期管理:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="设备注册与生命周期管理:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
