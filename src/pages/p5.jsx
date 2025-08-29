import React, { useEffect, useState } from 'react'
import { DataTable } from '../components/Table'
import { listByFeature, createByFeature } from '../lib/api.adapter'
import { DynamicForm } from '../components/Form'
export default function P5() {
  const featureSlug="设备注册与生命周期管理"
  const [rows,setRows]=useState([]); const [formOpen,setFormOpen]=useState(false)
  const columns=[{"column": "id", "label": "id", "type": "uuid"}, {"column": "name", "label": "name", "type": "string"}, {"column": "status", "label": "status", "type": "enum"}, {"column": "description", "label": "description", "type": "text"}, {"column": "created_at", "label": "created_at", "type": "datetime"}, {"column": "updated_at", "label": "updated_at", "type": "datetime"}, {"column": "device_id", "label": "device_id", "type": "string"}, {"column": "serial_number", "label": "serial_number", "type": "string"}]
  const fields=[{"field": "id", "label": "id", "type": "uuid", "required": true}, {"field": "name", "label": "name", "type": "string", "required": true}, {"field": "status", "label": "status", "type": "enum", "required": false}, {"field": "description", "label": "description", "type": "text", "required": false}, {"field": "created_at", "label": "created_at", "type": "datetime", "required": false}, {"field": "updated_at", "label": "updated_at", "type": "datetime", "required": false}, {"field": "device_id", "label": "device_id", "type": "string", "required": true}, {"field": "serial_number", "label": "serial_number", "type": "string", "required": true}, {"field": "did", "label": "did", "type": "string", "required": true}, {"field": "owner_address", "label": "owner_address", "type": "string", "required": false}, {"field": "firmware_version", "label": "firmware_version", "type": "string", "required": false}, {"field": "lifecycle_status", "label": "lifecycle_status", "type": "enum", "required": false}, {"field": "activated_at", "label": "activated_at", "type": "datetime", "required": false}, {"field": "last_seen_at", "label": "last_seen_at", "type": "datetime", "required": false}, {"field": "registry_tx_hash", "label": "registry_tx_hash", "type": "string", "required": false}, {"field": "onchain_status", "label": "onchain_status", "type": "enum", "required": false}, {"field": "chain", "label": "chain", "type": "enum", "required": false}, {"field": "latency_ms", "label": "latency_ms", "type": "number", "required": false}, {"field": "cpu_usage", "label": "cpu_usage", "type": "number", "required": false}, {"field": "mem_usage", "label": "mem_usage", "type": "number", "required": false}, {"field": "block_height", "label": "block_height", "type": "number", "required": false}, {"field": "peer_count", "label": "peer_count", "type": "number", "required": false}]
  useEffect(()=>{ listByFeature(featureSlug).then(setRows).catch(console.error) },[])
  const onSubmit=(payload)=>createByFeature(featureSlug,payload).then(()=>listByFeature(featureSlug).then(setRows))
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div><h1 className='text-2xl font-semibold'>设备注册与生命周期管理</h1><p className='text-muted text-sm'>提供设备注册界面，将设备物理序列号、硬件模块 (SE050 ) 生成的唯一 DID 和公钥进行绑定 。支持完整的设备生命周期操作，包括：关联设备到特定的预言机节点 、更新设备元数据、撤销设备身份 以及根据合规要求删除链上数据 。</p></div>
        <div className='flex gap-2'><button className='btn'>导出</button><button className='btn btn-primary' onClick={()=>setFormOpen(v=>!v)}>新增</button></div>
      </div>
      <DataTable columns={columns} rows={rows}/>
      {formOpen && (<div><h2 className='text-lg font-semibold mb-2'>新增/编辑</h2><DynamicForm fields={fields} onSubmit={onSubmit}/></div>)}
    </div>
  )
}
