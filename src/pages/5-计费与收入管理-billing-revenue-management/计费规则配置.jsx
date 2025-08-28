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
    "column": "bill_id",
    "label": "bill_id",
    "type": "string"
  },
  {
    "column": "customer_id",
    "label": "customer_id",
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
    "field": "bill_id",
    "label": "bill_id",
    "type": "string",
    "required": true
  },
  {
    "field": "customer_id",
    "label": "customer_id",
    "type": "string",
    "required": true
  },
  {
    "field": "plan_id",
    "label": "plan_id",
    "type": "string",
    "required": true
  },
  {
    "field": "metered_usage",
    "label": "metered_usage",
    "type": "number",
    "required": false
  },
  {
    "field": "amount",
    "label": "amount",
    "type": "number",
    "required": false
  },
  {
    "field": "currency",
    "label": "currency",
    "type": "enum",
    "required": false
  },
  {
    "field": "billing_period_start",
    "label": "billing_period_start",
    "type": "date",
    "required": false
  },
  {
    "field": "billing_period_end",
    "label": "billing_period_end",
    "type": "date",
    "required": false
  },
  {
    "field": "payment_status",
    "label": "payment_status",
    "type": "enum",
    "required": false
  },
  {
    "field": "invoice_url",
    "label": "invoice_url",
    "type": "string",
    "required": false
  }
]
  const [rows, setRows] = useState([])
  useEffect(()=>{ list('计费规则配置').then(setRows) },[])
  const onSubmit = (data)=>{ create('计费规则配置', data).then(()=>alert('已提交(模拟)')) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">计费规则配置</h1>
          <p className="text-muted text-sm">自定义费率、基于数据量/DID数量的模型，支持试点优惠</p>
        </div>
        <div className="flex gap-2">
          <PermissionGate perm="计费规则配置:export"><button className="btn">导出</button></PermissionGate>
          <PermissionGate perm="计费规则配置:create"><button className="btn btn-primary">新增</button></PermissionGate>
        </div>
      </div>
      <PermissionGate perm="计费规则配置:read">
        <DataTable columns={columns} rows={rows} />
      </PermissionGate>
      <div>
        <h2 className="text-lg font-semibold mb-2">新增/编辑</h2>
        <PermissionGate perm="计费规则配置:create">
          <DynamicForm fields={fields} onSubmit={onSubmit} />
        </PermissionGate>
      </div>
    </div>
  )
}
