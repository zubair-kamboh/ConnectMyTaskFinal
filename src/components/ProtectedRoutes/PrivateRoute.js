import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const PrivateRoute = ({ children, role }) => {
  const { user, provider, admin } = useAuth()

  if (role === 'user' && user) return children
  if (role === 'provider' && provider) return children
  if (role === 'admin' && admin) return children

  return <Navigate to="/login" replace />
}

export default PrivateRoute
