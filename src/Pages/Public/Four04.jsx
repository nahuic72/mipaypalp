import img1 from 'Assets/Images/Four04_1.png'
import img2 from 'Assets/Images/Four04_2.png'
import TextHeader from 'Components/Elements/TextHeader'
import { useNavigate } from 'react-router'
import 'Styles/Four04.scss'

const Four04 = () => {
  const navigate = useNavigate()

  const randomImg = () => {
    const rndm = Math.floor(Math.random() * 2 + 1)
    if (rndm === 1) return img1
    if (rndm === 2) return img2
    return img1
  }

  return (
    <>
      <TextHeader className="four04__header" text="" navigate={() => navigate('/login')} />
      <div className="four04__wrapper">
        <div className="four04__img-container">
          <img src={randomImg()} alt="Error 404" />
        </div>
        <h1>OOPS</h1>
        <p className="four04__description text">
          Parece que la página que buscas no está disponible{' '}
        </p>
      </div>
    </>
  )
}

export default Four04
