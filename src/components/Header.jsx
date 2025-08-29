import React from 'react'
import { useAuth } from '../auth/AuthContext'
import { useI18n } from '../i18n'
export default function Header(){
  const {value}=useAuth(); const {lang,switchTo}=useI18n()
  return (<header className="sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-border">
    <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full" style={{background:'linear-gradient(135deg,#C6A15B,#E0C27A)'}}></div><div className="font-semibold">AI Oracle Admin</div></div>
      <div className="flex items-center gap-3 text-sm">
        <span className="text-muted">{value.user?value.user.email:''}</span>
        <span className="px-2 py-1 rounded-lg border border-border">{value.user?value.user.role:''}</span>
        {value.user && <button className="btn" onClick={value.logout}>退出</button>}
        <select className="select ml-2" value={lang} onChange={e=>switchTo(e.target.value)}><option value='zh'>中文</option><option value='en'>EN</option></select>
      </div>
    </div>
  </header>)
}