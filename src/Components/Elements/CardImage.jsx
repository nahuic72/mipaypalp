import 'Styles/CardImage.scss'
import VisaLogo from './Icons/VisaLogo'

const CardImage = ({ gradient, position, cardInfo }) => {
  const { cardNumber, cardOwnerName } = cardInfo

  const formatCardNumber = (cardNumber) => {
    const length = cardNumber.length
    const lastNums = cardNumber.substring(length - 4)
    return `**** **** **** ${lastNums}`
  }
  return (
    <div className={`card ${gradient} ${position}`}>
      <div className="card__top-info">
        <div className="card__top-text">Debit Card</div>
        <div className="card__text">
          <VisaLogo />
        </div>
      </div>
      <div className="card__number">{formatCardNumber(cardNumber)}</div>
      <div className="card__bottom-info">
        <div className="card__text">{cardOwnerName}</div>
        <div className="card__text">**/**</div>
      </div>
    </div>
  )
}

export default CardImage
