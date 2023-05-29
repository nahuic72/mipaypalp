import useLogOut from 'Hooks/useLogout'
const LogoutButton = () => {
  const { logout } = useLogOut()
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default LogoutButton
