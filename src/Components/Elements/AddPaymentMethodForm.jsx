import { signupSchema } from 'Helpers/validationSchemas'
import 'Styles/AddPaymentMethod.scss'
import TextInput from './TextInput'

const AddPaymentMethodForm = ({ watch, errors, isValid, register }) => {
  const schema = signupSchema(watch)
  const { longText, cardNumber } = schema

  return (
    <>
      <div className="login-form__inputs">
        <TextInput
          type="text"
          name="cardOwnerName"
          label="Nombre del titular"
          register={register}
          validationType={longText}
          errors={errors}
        />
        <TextInput
          type="text"
          name="cardNumber"
          label="Número de la tarjeta"
          register={register}
          validationType={cardNumber}
          errors={errors}
        />
      </div>

      <div className="addPaymentMethod-form__button">
        <button className="btn btn-solid btn-long" disabled={!isValid}>
          Guardar método de pago
        </button>
      </div>
    </>
  )
}

export default AddPaymentMethodForm
