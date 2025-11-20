import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { loginRequest } from '../../lib/apiClient'
export default function Login(){
  const {value}=useAuth()
  const [email,setEmail]=useState('info@AIOracle.link')
  const [role,setRole]=useState('admin')
  const [password,setPassword]=useState('')
  const [manualToken,setManualToken]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  const nav=useNavigate(); const loc=useLocation(); const from=loc.state?.from||'/'
  async function submit(e){
    e.preventDefault(); setError(''); setLoading(true)
    try{
      const data=await loginRequest(email,password)
      const token=data?.token||manualToken; const roleFromApi=data?.role||role
      value.login(email, roleFromApi, token); nav(from,{replace:true})
    }catch(err){
      if(manualToken){ value.login(email,role,manualToken); nav(from,{replace:true}) }
      else { setError(String(err.message||err)) }
    }finally{ setLoading(false) }
  }
  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={submit} className="card p-8 w-[360px] space-y-4">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 mx-auto rounded-full" style={{background:'linear-gradient(135deg,#C6A15B,#E0C27A)'}}></div>
          <h1 className="text-xl font-semibold">登录 AI Oracle Admin</h1>
          <p className="text-muted text-sm">请选择角色或粘贴 Token</p>
        </div>
        <div className="space-y-1"><label className="text-sm text-muted">邮箱</label><input className="input w-full" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="space-y-1"><label className="text-sm text-muted">密码</label><input className="input w-full" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <div className="space-y-1"><label className="text-sm text-muted">角色</label>
          <select className="select w-full" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="admin">admin（全部权限）</option>
            <option value="operator">operator（读/增/改/导出/导入）</option>
            <option value="auditor">auditor（读/导出）</option>
            <option value="viewer">viewer（只读）</option>
          </select>
        </div>
        {error && <div className="text-xs text-[#ff8a8a]">{error}</div>}
        <div className="space-y-1"><label className="text-sm text-muted">若登录接口不可用，可手动粘贴 Token</label><input className="input w-full" value={manualToken} onChange={e=>setManualToken(e.target.value)} placeholder="Bearer Token" /></div>
        <button className="btn btn-primary w-full" disabled={loading}>{loading?'登录中...':'登录'}</button>
      </form>
    </div>
  )
}
