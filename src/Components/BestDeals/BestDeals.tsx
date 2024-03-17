
import InfoTable from '../InfoTable/InfoTable';
import SectionHeader from '../SectionHeader/SectionHeader'
import './BeastDeals.css'

import ScheduleButton from '../ScheduleButton/ScheduleButton';
import ButtonContainer from '../ButtonContainer/ButtonContainer';



const BestDeals = ({titledata,infotable,imgurl, description ,buttonsnames}) => {
  return (
    <div className='deals-section'>
    <div className='header-buttons'>
       <SectionHeader titledata={titledata}/>
       <div className='buttons'>
      
        <ButtonContainer    buttonsnames={buttonsnames}/>
        
              

       </div>

    </div>
    <div className='villa-info'>
      <div className='info-table-deals'>
        <InfoTable  info={infotable}/>
      </div>
      <div className='villa-img'>

        <img src={imgurl}/>
      </div>
      <div className='villa-description'>
       <div className='villa-text'>
        {description.map((villa,villaIndex) => (
          <div>
            <h4>{villa.title}</h4>
            <p>
               {villa.paragraph}
            </p>
          </div>
        ))}
        
        </div>
       <div className='schedule'>
        <ScheduleButton/>
       </div>

      </div>
    </div>
    </div>
  )
}

export default BestDeals
