import './Featured.css'

import SectionHeader from '../SectionHeader/SectionHeader'
import Accordion from '../Accordion/Accordion'
import InfoTable from '../InfoTable/InfoTable';
import featuredicon from '../../assets/images/featured-icon.png'



const Featured = ({img,data,titledata,info}) => {
  return (
    <div className='featured-section'>
       <div className="image-card">
           <div className='featuredimg'> <img   src={img} / > </div>
           <div className='featuredicon'>  <a href='/property-details'><img className='featuredicon' src={featuredicon}  /> </a></div>
              
           
        </div>
        <div className='section-header'>
          <div className='section' > <SectionHeader  sectionstyle={"sectionstyle"} titledata={titledata}/> </div> 
           
           <div className='accordion'> <Accordion   data={data}/> </div>

        </div>
        
        <div className='info-table'>
            <InfoTable  info={info}/>

        </div>
    </div>
  )
}

export default Featured
