import { useEffect } from 'react'
import toast from 'react-hot-toast'
import 'Styles/Inputs.scss'
import Cake from './Icons/Cake'
import EyeClosed from './Icons/EyeClosed'
import House from './Icons/House'
import Mail from './Icons/Mail'
import Person from './Icons/Person'
import Phone from './Icons/Phone'

const TextInput = ({ type, name, label, validationType, register, errors, className }) => {
  const errorMessage = errors?.[name]?.message

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { id: name, position: 'top-center' })
    } else {
      toast.dismiss(name)
    }
  }, [errorMessage, name])

  return (
    <div className={`text-input__wrapper ${className}`}>
      <label className="text-aux" htmlFor={name}>
        {label}
      </label>
      <input className="text" type={type} {...register(name, validationType)} />
      {inputIcon(name)}
    </div>
  )
}

const inputIcon = (name) => {
  switch (name) {
    case 'email':
      return <Mail />
    case 'password':
      return <EyeClosed />
    case 'confirmPassword':
      return <EyeClosed />
    case 'firstName':
      return <Person />
    case 'lastName':
      return <Person />
    case 'phone':
      return <Phone />
    case 'birthDate':
      return <Cake />
    case 'address':
      return <House />
    case 'city':
      return <House />
    case 'state':
      return <House />
    case 'country':
      return <House />

    default:
      break
  }
}

export default TextInput
