const CardsArray = ({ cards, handleClick }) => {
  return (
    <>
      <div className={`home-cards`} onClick={handleClick}>
        {cards}
      </div>
    </>
  )
}

export default CardsArray
