
import SectionHeader from '../SectionHeader/SectionHeader'
import './Video.css'



const titledata=[
    {subtitle:"| Video View",maintitle:"Get Closer View & Different Feeling"}
  ];


  const VideoFrame = ({videosrc }) =>{
   return (
    <div>
        <img src={videosrc}/>
          
        
        </div>

   )
  }


const Video = ({imgsrc ,videosrc}) => {
  return (
    <div className='video-section'>
        <img src={imgsrc}/>
        <div className='section-info'>
        <SectionHeader  titledata={titledata}/>
        </div>
        <div className='vd-frame'>
        <VideoFrame videosrc={videosrc}
             />
        </div>
        
      
    </div>
  )
}

export default Video
