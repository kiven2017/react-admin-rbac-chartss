import React from 'react'
import { useAuth } from './AuthContext'
export default function PermissionGate({perm,children,hide=false}){ const {value}=useAuth(); const ok=value.has(perm); if(ok) return children; return hide?null:<span className="text-xs text-muted">无权限：{perm}</span> }