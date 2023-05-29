import axios from 'axios'

class Auth {
  static login = async (userData) => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, userData)
    return res
  }

  static signup = async (userData) => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, userData)
    return res
  }
}

export default Auth
