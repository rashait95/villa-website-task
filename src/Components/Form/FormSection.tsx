import Button from '../Button/Button'
import './Form.css'

const FormSection = ({labels}) => {
  return (
    <div className='form-container'>
     <form>
        {labels.map((item,i)=>(
       <div className='formitem'>
           <label>{labels[i]}
            <input type="text" />
        </label>
        </div>
        ))}

        <div>
            <Button name='schedule a visit'/>
        </div>
      
    </form> 
    </div>
  )
}

export default FormSection
