import './Card.css'
import villaphoto from '../../assets/images/property-01.jpg'

const cardinfo=[{villatype:"luxury",price:"$2.264.000",description:"18 New Street Miami, OR 972"},{}];

const Card = () => {
  return (
    <div className='card-Item'>
       <div className='card-img'><a href='/prop-details'><img src={villaphoto}/></a></div>
        
       <div className='card-info'>
        <div className='first-line'>
            <span>{cardinfo[0].villatype}</span>
            <h6>{cardinfo[0].price}</h6>
        </div>
        <div className='second-line'>
            <h4></h4>
        </div>
        <div className='third-line'>
            <ul>

            </ul>
        </div>
        <div className='fourth-line'>
           
        </div>
        </div> 
    </div>
  )
}

export default Card
