import { useLoaderData } from 'react-router-dom'
import { decode } from 'js-base64'
import Login from 'Components/Login/Login'
import Checkout from 'Components/Gateway/Checkout'
import useGateway from 'Hooks/useGateway'

const GatewayPage = () => {
  let sellerInfo = useLoaderData()
  sellerInfo = {
    ...sellerInfo,
    checkoutType: decode(sellerInfo.checkoutType),
    totalAmount: decode(sellerInfo.totalAmount),
  }
  const {
    buyerToken,
    setBuyerToken,
    funds,
    payMets,
    isSubmit,
    confirmTransaction,
    handleRadioDonation,
    resetPage,
  } = useGateway(sellerInfo)

  return (
    <>
      {!buyerToken && !isSubmit && <Login setBuyerToken={setBuyerToken} />}
      {buyerToken && (
        <Checkout
          sellerInfo={sellerInfo}
          payMets={payMets}
          funds={funds}
          confirmTransaction={confirmTransaction}
          handleRadioDonation={handleRadioDonation}
          resetPage={resetPage}
        />
      )}
    </>
  )
}

export default GatewayPage
