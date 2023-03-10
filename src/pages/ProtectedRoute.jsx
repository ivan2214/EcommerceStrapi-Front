import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAllowed, redirectTo = '/', children }) => {
  console.log(isAllowed)
  if (!isAllowed) {
    return <Navigate to={redirectTo}  />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
