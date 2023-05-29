import PayPulpLogo from 'Components/Elements/Icons/PayPulpLogo'
import { userContext } from 'Context/UserContext'
import { useContext } from 'react'
import 'Styles/CardImage.scss'

const CardImageFunds = ({ funds, position }) => {
  const { userCtxt } = useContext(userContext)
  return (
    <div className={`card-funds card-funds__gradient ${position}`}>
      <div className="card-funds__top-info">
        <h2 className="card-funds__top-text">PAYPULP COIN</h2>
        <div className="card-funds__logo">
          <PayPulpLogo size="36" />
        </div>
      </div>
      <div className="card-funds__number">Saldo disponible {funds} €</div>
      <div className="card-funds__bottom-info">
        <div className="card-funds__text">{userCtxt.firstName}</div>
        <div className="card-funds__text">**/**</div>
      </div>
    </div>
  )
}

export default CardImageFunds
