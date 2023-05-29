import AddPaymentMethodForm from 'Components/Elements/AddPaymentMethodForm'
import TextHeader from 'Components/Elements/TextHeader'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import useAddPaymentMethod from 'Hooks/useAddPaymentMethod'
import CardImage from 'Components/Elements/CardImage'

const addPaymentDefaultValues = {
  cardOwnerName: '',
  cardNumber: '',
}

const AddPaymentMethod = () => {
  const navigate = useNavigate()
  const { onSubmit } = useAddPaymentMethod()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: addPaymentDefaultValues,
  })

  const cardInfo = watch()

  const goBack = () => {
    navigate('/home')
  }

  return (
    <>
      <TextHeader text={'Agregar tarjeta nueva'} navigate={goBack} />
      <div className="addPaymentMethod-card__container">
        <CardImage cardInfo={cardInfo} gradient="card__gradient--1" />
      </div>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <AddPaymentMethodForm register={register} watch={watch} errors={errors} isValid={isValid} />
      </form>
    </>
  )
}

export default AddPaymentMethod
