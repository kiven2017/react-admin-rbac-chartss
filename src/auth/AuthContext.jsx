import React,{createContext,useContext,useEffect,useMemo,useState} from 'react'
import rbac from '../rbac.json'
const AuthCtx=createContext(null)
export function AuthProvider({children}){
  const [user,setUser]=useState(()=>{try{return JSON.parse(localStorage.getItem('auth:user'))||null}catch{return null}})
  useEffect(()=>{localStorage.setItem('auth:user',JSON.stringify(user)); if(user?.token) localStorage.setItem('auth:token',user.token)},[user])
  const value=useMemo(()=>({user,login:(email,role='viewer',token=null)=>setUser({email,role,token}),logout:()=>setUser(null),has:(perm)=>hasPermission(user?.role,perm)}),[user])
  function hasPermission(role,perm){ if(!role||!rbac.roles[role]) return false; const ps=rbac.roles[role].permissions; return ps.includes('*')||ps.includes(perm) }
  return <AuthCtx.Provider value={{value,rbac}}>{children}</AuthCtx.Provider>
}
export function useAuth(){ const ctx=useContext(AuthCtx); if(!ctx) throw new Error('useAuth must be used within AuthProvider'); return ctx }