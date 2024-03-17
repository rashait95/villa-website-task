import Button from '../Button/Button'
import ScheduleButton from '../ScheduleButton/ScheduleButton'
import './Card.css'


const Card = ( {cardref,cardimg,villatype,description,price}) => {
  return (
    
    <div className='card-Item'>


             <div>
                <div className='card-img'>
                    <a href={cardref}>
                    <img src={cardimg}/></a>
                
                </div>
             <div className='card-info'>
                <div className='first-line'>
                    <span>{villatype}</span>
                    <h6>{price}</h6>
                </div>
              <div className='second-line'>

                  <h4> {description}</h4>
              </div>
                  
                    <div className='fourth-line'>
                        <Button name='Schedule a visit'/>
                    
                    </div>
              </div>
              </div>

              </div>
              
              
         
      
       
   
    
    
  )}

export default Card
