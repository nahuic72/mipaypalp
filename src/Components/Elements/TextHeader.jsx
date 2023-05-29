import 'Styles/TextHeader.scss'
import ArrowLeft from './Icons/ArrowLeft'

const TextHeader = ({ text, navigate, className }) => {
  return (
    <div className={`text-header ${className}`}>
      <div className="text-header__arrow">
        <ArrowLeft navigate={navigate} />
      </div>
      <h2 className="text-header__text">{text}</h2>
    </div>
  )
}

export default TextHeader
