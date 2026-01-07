import { Navigate } from "react-router-dom"
import React from "react"

type Props = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("adminToken")

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
