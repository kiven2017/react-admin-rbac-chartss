import React, { useEffect, useState } from 'react'
import { DataTable } from '../components/Table'
import { listByFeature, createByFeature } from '../lib/api.adapter'
import { DynamicForm } from '../components/Form'
export default function P9() {
  const featureSlug="多签审批工作流"
  const [rows,setRows]=useState([]); const [formOpen,setFormOpen]=useState(false)
  const columns=[{"column": "id", "label": "id", "type": "uuid"}, {"column": "name", "label": "name", "type": "string"}, {"column": "status", "label": "status", "type": "enum"}, {"column": "description", "label": "description", "type": "text"}, {"column": "created_at", "label": "created_at", "type": "datetime"}, {"column": "updated_at", "label": "updated_at", "type": "datetime"}, {"column": "version", "label": "version", "type": "string"}, {"column": "binary_url", "label": "binary_url", "type": "string"}]
  const fields=[{"field": "id", "label": "id", "type": "uuid", "required": true}, {"field": "name", "label": "name", "type": "string", "required": true}, {"field": "status", "label": "status", "type": "enum", "required": false}, {"field": "description", "label": "description", "type": "text", "required": false}, {"field": "created_at", "label": "created_at", "type": "datetime", "required": false}, {"field": "updated_at", "label": "updated_at", "type": "datetime", "required": false}, {"field": "version", "label": "version", "type": "string", "required": true}, {"field": "binary_url", "label": "binary_url", "type": "string", "required": true}, {"field": "binary_hash", "label": "binary_hash", "type": "string", "required": true}, {"field": "registry_tx_hash", "label": "registry_tx_hash", "type": "string", "required": false}, {"field": "onchain_status", "label": "onchain_status", "type": "enum", "required": false}, {"field": "chain", "label": "chain", "type": "enum", "required": false}]
  useEffect(()=>{ listByFeature(featureSlug).then(setRows).catch(console.error) },[])
  const onSubmit=(payload)=>createByFeature(featureSlug,payload).then(()=>listByFeature(featureSlug).then(setRows))
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div><h1 className='text-2xl font-semibold'>多签审批工作流</h1><p className='text-muted text-sm'>固件更新发布前，必须通过链上治理或多签（例如，2 of 3 签名）确认 。平台需提供界面让治理成员进行审批操作 。</p></div>
        <div className='flex gap-2'><button className='btn'>导出</button><button className='btn btn-primary' onClick={()=>setFormOpen(v=>!v)}>新增</button></div>
      </div>
      <DataTable columns={columns} rows={rows}/>
      {formOpen && (<div><h2 className='text-lg font-semibold mb-2'>新增/编辑</h2><DynamicForm fields={fields} onSubmit={onSubmit}/></div>)}
    </div>
  )
}
