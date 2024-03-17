import SectionHeader from '../SectionHeader/SectionHeader'
import './HeroSection.css'

const HeroSection = ({imgsrc,titledata}) => {
  return (
    
        <div className='hero-section'>
            <img src={imgsrc}/>
            <div className='section-info'>
              <SectionHeader  titledata={titledata}/>
            </div>
        </div>
        )
}

export default HeroSection
