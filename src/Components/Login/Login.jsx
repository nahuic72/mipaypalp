import 'Styles/Login.scss'
import FormLogin from './FormLogin'
import HeaderLogin from './HeaderLogin'

const Login = ({ setBuyerToken }) => {
  return (
    <div className="login">
      <div className="login__header-wrapper">
        <HeaderLogin />
      </div>
      <FormLogin setBuyerToken={setBuyerToken} />
    </div>
  )
}

export default Login
