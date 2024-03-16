
import Card from '../Card/Card';
import SectionHeader from '../SectionHeader/SectionHeader'
import './Properities.css'



const Properities = () => {

    const propdata =[
        {subtitle:"| Properties",maintitle:"We Provide The Best Property You Like"}
      ];
      
  return (
    <div className="prop-section">
<div className="prop-header">
    <SectionHeader titledata={propdata}/>
</div>
<div className='cards'>
  <Card/>
  <Card/>
  <Card/>
</div> 
    </div>
  )
}

export default Properities
