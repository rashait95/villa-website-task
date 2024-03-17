import './ContactCard.css'

const ContactCard = ({cardinfo}) => {
  return (
    <div className='contact-card'>
        {cardinfo.map((card,i)=>(
         <div>
            
      <div className='contact-icon'>
        <img src={cardinfo[i].iconurl}/>
        
      </div>
      <div className='contact-info'>

       <h6>{cardinfo[i].info1}</h6>  
       <span>{cardinfo[i].span}</span> 
      </div>
    </div>
        

        ))}
        </div>
  )
}

export default ContactCard
