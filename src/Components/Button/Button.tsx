import './Button.css'

const Button = ({name}) => {
  return (
    <div className='button-component'>
      <button>{name}</button>
    </div>
  )
}

export default Button
