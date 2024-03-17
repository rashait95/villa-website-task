import ContactCard from '../ContactCard/ContactCard'
import FormSection from '../Form/FormSection'
import Gps from '../Gps/Gps'
import HeroSection from '../HeroSection/HeroSection'
import './ContactSection.css'
import icon1 from '../../assets/images/phone-icon.png'

import icon2 from '../../assets/images/email-icon.png'
const contactcard1=[{
 iconurl:icon1,
 info1:" 098387373",
 span:"phoneNumber"
}]

const contactcard2=[{
  iconurl:icon2,
  info1:"info@villa.com",
  span:"Bussines Email"
 }]
const ContactSection = ({contactimg,contactdata,gpssrc,labels}) => {
  return (
    <div className='contact-section'>
      <div className='Hero-section'>
      <HeroSection imgsrc={contactimg} titledata={contactdata}/>
     
    
      </div>
      <div className='gps-section'>
        <div className='gps'>
          <Gps gpssrc={gpssrc}/>
        </div>
        <div className='form-sec'>
            <FormSection labels={labels}/>
        </div>
        
      </div>
      <div className='contact-cards'>
          <div className='card1'><ContactCard cardinfo={contactcard1} /></div>
          <div className='card1'><ContactCard cardinfo={contactcard2} /></div>
          
        </div>
    </div>
  )
}

export default ContactSection
