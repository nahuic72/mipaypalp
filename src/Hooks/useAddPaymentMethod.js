import { useNavigate } from 'react-router-dom'
import PaymentMethods from 'Services/PaymentMethods'
import toast from 'react-hot-toast'

const useAddPaymentMethod = () => {
  const navigate = useNavigate()

  const onSubmit = async (paymentData) => {
    try {
      const res = await PaymentMethods.addPaymentMethod(paymentData)
      if (res.status === 201) {
        toast.success('Su método de pago ha sido agregado con éxito!')
        navigate('/home')
      }
    } catch (error) {
      toast.error('Se produjo un error. Por favor, vuelve a intentarlo más tarde.')
    }
  }

  return { onSubmit }
}

export default useAddPaymentMethod
