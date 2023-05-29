import { useContext, useEffect } from 'react'
import { userContext } from '../Context/UserContext'
import Transactions from '../Services/Transactions'

export default function useGetTransactions() {
  const { transactions, setTransactions } = useContext(userContext)

  useEffect(() => {
    if (transactions.length === 0) {
      const transactionsReq = async () => {
        const res = await Transactions.getTransactions()
        setTransactions(res.data)
      }
      transactionsReq()
    }
  }, [])

  return { transactions }
}
