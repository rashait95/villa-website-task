import './ScheduleButton.css'

import { FaCalendar } from 'react-icons/fa'




const ScheduleButton = () => {
  return (
    <div className='sechedule-btn-container'>
              
                   <button className='schedule-btn' type='button'>
                    <FaCalendar className='fa-calender'/>Schedule a visit
                    </button>
                  
    </div>
  )
}

export default ScheduleButton
