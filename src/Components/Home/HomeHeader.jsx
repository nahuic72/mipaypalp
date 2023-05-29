import avatar from 'Assets/Images/Avatar.png'
import QuestionMark from 'Components/Elements/Icons/QuestionMark'
import useLogOut from 'Hooks/useLogout'
import 'Styles/Home.scss'

const Header = ({ name }) => {
  const { logout } = useLogOut()

  return (
    <div className="home-header">
      <img className="home-header__avatar" src={avatar} alt="Avatar" onClick={logout} />
      <h3 className="home-header__greeting">Hola {name}</h3>
      <div className="home-header__help">
        <QuestionMark />
      </div>
    </div>
  )
}

export default Header
