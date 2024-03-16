import './SectionHeader.css'




const SectionHeader = ({titledata }) => {
  return (
    <div className="section-hed">
       
        
            <h6>{titledata[0].subtitle}</h6>
            <h2 >{titledata[0].maintitle  }</h2>
   
    </div>
  )
}

export default SectionHeader
