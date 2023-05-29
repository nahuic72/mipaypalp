import useGetUserInfo from './useGetUserInfo'

export default function useClearUserData() {
  const { setUserCtxt, setPayMets } = useGetUserInfo()

  const clearData = () => {
    sessionStorage.removeItem('token')
    setUserCtxt({})
    setPayMets([])
  }

  return clearData
}
