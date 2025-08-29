import React from 'react'
export function DataTable({ columns, rows }) {
  return (<div className="card p-4 shadow-soft"><div className="overflow-x-auto">
    <table className="min-w-full text-sm"><thead><tr>
      {columns.map((c,i)=>(<th key={i} className="text-left font-semibold py-2 pr-6 text-muted">{c.label}</th>))}
    </tr></thead><tbody>
      {(!rows||rows.length===0)?(<tr><td colSpan={columns.length} className="py-6 text-muted">暂无数据</td></tr>):
        rows.map((r,ri)=>(<tr key={ri} className="border-t border-border">{columns.map((c,ci)=>(<td key={ci} className="py-2 pr-6">{String(r[c.field]??'')}</td>))}</tr>))}
    </tbody></table></div></div>)
}