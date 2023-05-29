import SocialLogos from 'Components/Elements/SocialLogos'
import TextInput from 'Components/Elements/TextInput'
import useLogin from 'Hooks/useLogin'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = ({ setBuyerToken }) => {
  const navigate = useNavigate()
  const { onSubmit } = useLogin(setBuyerToken)
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const goToRegister = () => navigate('/signup')

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login__call">Inicia sesión para continuar</h2>
        {/* <div className="login-form__inputs"> */}
        <TextInput className="login__email" name="email" label="Email" register={register} />
        <TextInput type="password" name="password" label="Contraseña" register={register} />
        {/* </div> */}
        <div className="login__forgot-pass">
          <button className="btn-text-only">Olvide mi contraseña</button>
        </div>
        {/* <div className="login-form__buttons"> */}
        <button className="login-form__login-btn btn btn-solid btn-long" onClick={handleSubmit}>
          Iniciar Sesión
        </button>
        <button className="login-form__register-btn btn btn-text-only" onClick={goToRegister}>
          Registrarse
        </button>
        {/* </div> */}
      </form>
    </>
  )
}

export default FormLogin
