import TextHeader from 'Components/Elements/TextHeader'
import HeaderLogin from 'Components/Login/HeaderLogin'
import Registration1 from 'Components/Signup/Registration1'
import Registration2 from 'Components/Signup/Registration2'
import useSignup from 'Hooks/useSignup'
import { useForm } from 'react-hook-form'
import 'Styles/Auth.scss'
import 'Styles/Signup.scss'

const signupDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  country: '',
  birthDate: '1985-10-25',
  gender: '',
}

export default function Signup() {
  const { page, setPage, onSubmit } = useSignup()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: signupDefaultValues,
  })

  return (
    <div className="signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        {page === 1 && (
          <div>
            <div className="signup__header-wrapper">
              <HeaderLogin />
            </div>
            <Registration1
              setPage={setPage}
              register={register}
              watch={watch}
              errors={errors}
              isValid={isValid}
            />
          </div>
        )}

        {page === 2 && (
          <div>
            <Registration2
              setPage={setPage}
              register={register}
              watch={watch}
              errors={errors}
              isValid={isValid}
            />
          </div>
        )}
      </form>
    </div>
  )
}
