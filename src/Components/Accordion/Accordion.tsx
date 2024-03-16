import { useState } from 'react'
import './Accordion.css'


const AccordionSection = ({section,isActivated,setActiveIndex,sectionIndex }) =>{

    const toggleSection =()=>{
        console.log('toggled')
        const nextIndex = isActivated ? null : sectionIndex
        setActiveIndex(nextIndex) 
       
        
    }
    
   return (

    <div  className='accordion-item'>


        <div className='acc-title ' onClick={toggleSection} >
            <div>{section.question}</div>
            <div> {isActivated ?  '-' : '+' }</div>
     
        </div>
        <div  className='acc-answer'>
         {section.answer}
        </div>
    </div>
   )
   
}

const Accordion = ({data}) => {
  const [activeIndex,setActiveIndex]=useState(0);

  return (
           <div className='accordion-style'> 
            
            {data.map((section,sectionIndex)=>(
                <div  className="accordion-section">
                    <AccordionSection section={section} 
                    isActivated ={sectionIndex === activeIndex}
                    setActiveIndex={setActiveIndex}
                    sectionIndex={sectionIndex}/>
                </div>
            
            
            
            ))}
            </div>

        



    )}
    

export default Accordion
