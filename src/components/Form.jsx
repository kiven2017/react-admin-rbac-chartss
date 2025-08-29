import React,{useState} from 'react'
export function DynamicForm({fields,onSubmit}){
  const [data,setData]=useState({}); const [errors,setErrors]=useState({})
  function update(k,v){ setData(p=>({...p,[k]:v})) }
  function validate(){ const e={}; fields.forEach(f=>{ if(f.required && !data[f.field]) e[f.field]='必填'; if(f.type==='number' && data[f.field] && isNaN(Number(data[f.field]))) e[f.field]='必须为数字' }); setErrors(e); return Object.keys(e).length===0 }
  function submit(ev){ ev.preventDefault(); if(!validate()) return; onSubmit&&onSubmit(data) }
  return (<form onSubmit={submit} className="card p-4 space-y-4 shadow-soft">
    <div className="grid md:grid-cols-2 gap-4">
      {fields.map((f,i)=>(<div key={i} className="flex flex-col gap-1">
        <label className="text-sm text-muted">{f.label}{f.required?' *':''}</label>
        {renderInput(f, data[f.field]??'', v=>update(f.field,v))}
        {errors[f.field] && <div className="text-xs text-[#ff8a8a]">{errors[f.field]}</div>}
      </div>))}
    </div>
    <div className="flex gap-3"><button type="button" className="btn">取消</button><button type="submit" className="btn btn-primary">保存</button></div>
  </form>) }
function renderInput(f,value,onChange){
  switch(f.type){
    case 'text': case 'string': case 'uuid': case 'json': return <input className="input" value={value} onChange={e=>onChange(e.target.value)} placeholder={f.field}/>
    case 'number': return <input className="input" value={value} onChange={e=>onChange(e.target.value)} placeholder="数字" />
    case 'date': return <input className="input" type="date" value={value} onChange={e=>onChange(e.target.value)} />
    case 'datetime': return <input className="input" type="datetime-local" value={value} onChange={e=>onChange(e.target.value)} />
    case 'boolean': return (<select className="select" value={String(value)} onChange={e=>onChange(e.target.value==='true')}><option value="">请选择</option><option value="true">是</option><option value="false">否</option></select>)
    case 'enum': return (<select className="select" value={value} onChange={e=>onChange(e.target.value)}><option value="">请选择</option><option>Option A</option><option>Option B</option></select>)
    default: return <input className="input" value={value} onChange={e=>onChange(e.target.value)} placeholder={f.field}/>
  }
}