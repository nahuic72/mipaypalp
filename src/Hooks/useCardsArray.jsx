import CardImage from 'Components/Elements/CardImage'
import CardImageFunds from 'Components/Elements/CardImageFunds'
import { useState } from 'react'

export default function useCardsArray(payMets = null, funds) {
  const [order, setOrder] = useState(0)

  let cards = null

  if (payMets.length === 0) {
    cards = <CardImageFunds funds={funds} />
  } else {
    const cardFunds = [
      <div
        className={`card__wrapper ${payMets.length === 1 ? 'card__wrapper-1' : undefined}`}
        key={0}>
        <CardImageFunds funds={funds} />
      </div>,
    ]
    const payMetsComps = payMets.map((met, i) => (
      <div
        className={`card__wrapper ${payMets.length === 1 ? 'card__wrapper-1' : undefined}`}
        key={i + 1}>
        <CardImage cardInfo={met} gradient={`card__gradient--${i + 1}`} />
      </div>
    ))
    cards = cardFunds.concat(payMetsComps)
    cards = cards.slice(order).concat(cards.slice(0, order)).slice(0, 3).reverse()
  }

  const handleClick = () => {
    setOrder((order + 1) % (payMets?.length + 1))
  }

  return { cards, order, handleClick }
}
