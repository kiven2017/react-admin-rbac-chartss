import React, { useEffect, useState } from 'react'
import { DataTable } from '../components/Table'
import { listByFeature, createByFeature } from '../lib/api.adapter'
import { DynamicForm } from '../components/Form'
export default function P8() {
  const featureSlug="固件版本库"
  const [rows,setRows]=useState([]); const [formOpen,setFormOpen]=useState(false)
  const columns=[{"column": "id", "label": "id", "type": "uuid"}, {"column": "name", "label": "name", "type": "string"}, {"column": "status", "label": "status", "type": "enum"}, {"column": "description", "label": "description", "type": "text"}, {"column": "created_at", "label": "created_at", "type": "datetime"}, {"column": "updated_at", "label": "updated_at", "type": "datetime"}, {"column": "device_id", "label": "device_id", "type": "string"}, {"column": "serial_number", "label": "serial_number", "type": "string"}]
  const fields=[{"field": "id", "label": "id", "type": "uuid", "required": true}, {"field": "name", "label": "name", "type": "string", "required": true}, {"field": "status", "label": "status", "type": "enum", "required": false}, {"field": "description", "label": "description", "type": "text", "required": false}, {"field": "created_at", "label": "created_at", "type": "datetime", "required": false}, {"field": "updated_at", "label": "updated_at", "type": "datetime", "required": false}, {"field": "device_id", "label": "device_id", "type": "string", "required": true}, {"field": "serial_number", "label": "serial_number", "type": "string", "required": true}, {"field": "did", "label": "did", "type": "string", "required": true}, {"field": "owner_address", "label": "owner_address", "type": "string", "required": false}, {"field": "firmware_version", "label": "firmware_version", "type": "string", "required": false}, {"field": "lifecycle_status", "label": "lifecycle_status", "type": "enum", "required": false}, {"field": "activated_at", "label": "activated_at", "type": "datetime", "required": false}, {"field": "last_seen_at", "label": "last_seen_at", "type": "datetime", "required": false}, {"field": "version", "label": "version", "type": "string", "required": true}, {"field": "binary_url", "label": "binary_url", "type": "string", "required": true}, {"field": "binary_hash", "label": "binary_hash", "type": "string", "required": true}]
  useEffect(()=>{ listByFeature(featureSlug).then(setRows).catch(console.error) },[])
  const onSubmit=(payload)=>createByFeature(featureSlug,payload).then(()=>listByFeature(featureSlug).then(setRows))
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div><h1 className='text-2xl font-semibold'>固件版本库</h1><p className='text-muted text-sm'>管理员可以上传、存储和管理不同版本的设备固件，并附有版本号、发布说明和固件哈希值 。</p></div>
        <div className='flex gap-2'><button className='btn'>导出</button><button className='btn btn-primary' onClick={()=>setFormOpen(v=>!v)}>新增</button></div>
      </div>
      <DataTable columns={columns} rows={rows}/>
      {formOpen && (<div><h2 className='text-lg font-semibold mb-2'>新增/编辑</h2><DynamicForm fields={fields} onSubmit={onSubmit}/></div>)}
    </div>
  )
}
