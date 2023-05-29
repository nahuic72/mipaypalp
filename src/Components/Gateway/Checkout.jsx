import CardImageFunds from 'Components/Elements/CardImageFunds'
import CardsArray from 'Components/Elements/CardsArray'
import TextHeader from 'Components/Elements/TextHeader'
import useCardsArray from 'Hooks/useCardsArray'
import { useState } from 'react'
import 'Styles/Checkout.scss'
import DonateAmounts from './CheckoutInfo/DonateAmounts'
import FixAmount from './CheckoutInfo/FixAmount'

const Checkout = ({
  sellerInfo,
  payMets,
  funds,
  confirmTransaction,
  handleRadioDonation,
  resetPage,
}) => {
  const { checkoutType, totalAmount } = sellerInfo
  const [isDisabled, setIsDisabled] = useState(false)
  const { cards, order, handleClick } = useCardsArray(payMets, funds)

  const pay = () => {
    setIsDisabled(true)
    let dataToSubmit

    if (payMets.length === 0 || order === 0) {
      dataToSubmit = 'buyerFunds'
    } else {
      dataToSubmit = payMets[order - 1]
    }

    confirmTransaction(dataToSubmit)
  }

  return (
    <>
      <TextHeader text="Completa el checkout" navigate={resetPage} />
      <div className="checkout__wrapper">
        {checkoutType === 'fixed' && <FixAmount totalAmount={totalAmount} />}
        {checkoutType === 'donate' && (
          <DonateAmounts totalAmount={totalAmount} handleRadioDonation={handleRadioDonation} />
        )}

        {payMets.length > 0 ? (
          <CardsArray payMets={payMets} funds={funds} cards={cards} handleClick={handleClick} />
        ) : (
          <div className="checkout__no-cards">
            <CardImageFunds funds={funds} key="c" />
          </div>
        )}

        <button
          className="checkout__pay-btn btn btn-solid btn-long"
          onClick={pay}
          disabled={isDisabled}>
          PAGAR
        </button>
      </div>
    </>
  )
}

export default Checkout
