import {useNavigate, Route, Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get('jwt_token')
  const navigate = useNavigate()
  useEffect(() => {
    if(jwtToken === undefined) {
      navigate('/login')
    }
  }, [navigate])
  return jwtToken ? <Outlet/> : <Route {...props} />
}  

export default ProtectedRoute
