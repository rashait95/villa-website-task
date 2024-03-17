import Card from '../Card/Card'
import './CardsContainer.css'

const CardsContainer = ({cards}) => {
  return (
    <div className='cards-container'>
     {cards.map((card,i)=>(
           <div className='carditem'> 
            <Card cardimg={cards[i].cardimg}
               cardref={cards[i].cardref}
                villatype={cards[i].villatype}
                description={cards[i].description}
                price={cards[i].price}
            />
           </div> 
      ))}  
    
      
    </div>
  )
}

export default CardsContainer
