import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const PrivateRoute = () => {
  const { state } = useAuth()

  if (!state.auth) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default PrivateRoute