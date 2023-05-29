import { userContext } from 'Context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import PaymentMethods from 'Services/PaymentMethods'
import UserInfo from 'Services/User'

export default function useGetUserInfo() {
  const { userCtxt, setUserCtxt } = useContext(userContext)
  const [payMets, setPayMets] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: userData } = await UserInfo.getUserInfo()
        const { data: payMetsData } = await PaymentMethods.getPayMets()
        setUserCtxt(userData)
        setPayMets(payMetsData)
      } catch (err) {
        toast.error(
          'Ha habido un problema accediendo a tu informacion. Intentalo de nuevo mas tarde',
        )
      }
    }
    getData()
  }, [])

  return { userCtxt, setUserCtxt, payMets, setPayMets }
}
