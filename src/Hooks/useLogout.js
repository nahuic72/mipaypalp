import { useNavigate } from 'react-router'
import useGetUserInfo from './useGetUserInfo'

const useLogOut = () => {
  const { setUserCtxt, setPayMets } = useGetUserInfo()
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem('token')
    setUserCtxt({})
    setPayMets([])
    navigate('/login')
  }

  return { logout }
}

export default useLogOut
