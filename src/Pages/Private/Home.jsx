import CardsArray from 'Components/Elements/CardsArray'
import NoCardInfo from 'Components/Elements/NoCardInfo'
import HomeActions from 'Components/Home/HomeActions'
import HomeFunds from 'Components/Home/HomeFunds'
import HomeHeader from 'Components/Home/HomeHeader'
import useCardsArray from 'Hooks/useCardsArray'
import useGetUserInfo from 'Hooks/useGetUserInfo'

const Home = () => {
  const { userCtxt, payMets } = useGetUserInfo()
  const { cards, handleClick } = useCardsArray(payMets, userCtxt.funds)

  return (
    <>
      <HomeHeader name={userCtxt.firstName} />
      <section className="home-container">
        <HomeFunds funds={userCtxt.funds} />
        {payMets.length === 0 ? (
          <NoCardInfo />
        ) : (
          <CardsArray cards={cards} handleClick={handleClick} />
        )}
        <HomeActions accountType={userCtxt.accountType} />
      </section>
    </>
  )
}

export default Home
