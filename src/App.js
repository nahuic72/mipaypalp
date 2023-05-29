import axios from 'axios'
import MainApp from 'Components/MainApp'
import GatewayPage from 'Pages/GatewayPage.jsx'
import AddPaymentMethod from 'Pages/Private/AddPaymentMethod'
import AddSellerInfoPage from 'Pages/Private/AddSellerInfoPage'
import Home from 'Pages/Private/Home'
import PayWithQR from 'Pages/Private/PayWithQR'
import QrGenPage from 'Pages/Private/QrGenPage'
import Four04 from 'Pages/Public/Four04'
import LoginPage from 'Pages/Public/LoginPage'
import Signup from 'Pages/Public/Signup'
import { toast } from 'react-hot-toast'
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from 'react-router-dom'
import 'Styles/App.scss'
import 'Styles/Buttons.scss'

const checkForToken = async () => {
  const token = sessionStorage.getItem('token')

  if (!token) {
    throw redirect('/login')
  }

  const url = `${process.env.REACT_APP_BASE_URL}/private/user/validatetoken`

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    })

    if (response.status === 200) {
      return null
    }
  } catch (error) {
    sessionStorage.clear()
    toast.error('Ha habido un problema de autorización')
    throw redirect('/login')
  }
}

const goToLogin = () => {
  const isDefaultPage = window.location.pathname === '/'
  if (isDefaultPage) {
    window.location.href = '/login'
  }
  return null
}

const qrGenLoader = ({ params }) => {
  if (params.accountType === 'personal') throw redirect(`/addsellerinfo/${params.checkoutType}`)
  return params
}

const checkAlreadyAuthenticated = () => {
  const token = sessionStorage.getItem('token')
  if (token) {
    throw redirect('/home')
  }
  return null
}

const passParams = ({ params }) => params

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainApp />} loader={goToLogin} errorElement={<Four04 />}>
      <Route path="login" element={<LoginPage />} loader={checkAlreadyAuthenticated} />
      <Route path="signup" element={<Signup />} loader={checkAlreadyAuthenticated} />
      <Route loader={checkForToken}>
        <Route path="home" element={<Home />} />
        <Route
          path="addsellerinfo/:checkoutType"
          element={<AddSellerInfoPage />}
          loader={passParams}
        />
        <Route path="paywithqr" element={<PayWithQR />} />
        <Route path="addpaymentmethod" element={<AddPaymentMethod />} />
        <Route
          path="qrgen/:accountType/:checkoutType"
          element={<QrGenPage />}
          loader={qrGenLoader}
        />
      </Route>
      <Route
        path="gateway/:sellerUuid/:checkoutType/:totalAmount"
        element={<GatewayPage />}
        loader={passParams}
      />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
