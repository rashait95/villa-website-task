import Button from '../Button/Button'
import './ButtonContainer.css'

const ButtonContainer = ({buttonsnames}) => {
  return (
    
       <div className='buttonscontainer'>
        {buttonsnames.map((button,index)=>(
          <div>
              <Button name={buttonsnames[index]}/>
        </div>
        ))}
      
           </div>
  )
}

export default ButtonContainer
