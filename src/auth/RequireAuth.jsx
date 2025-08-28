import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function RequireAuth({ children }) {
  const { value } = useAuth()
  const loc = useLocation()
  if (!value.user) return <Navigate to="/login" state={{ from: loc.pathname }} replace />
  return children
}
