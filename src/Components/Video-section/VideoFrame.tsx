
import { FaPlay } from 'react-icons/fa'
import HeroSection from '../HeroSection/HeroSection'
import './VideoFrame.css'







  const VideoFrame = ({imgsrc,videosrc,videotitledata }) =>{
   return (
    <div className='video-section'>

    <div className='hero'>
      <HeroSection imgsrc={imgsrc}
         titledata={videotitledata}/>
    </div>
    <div className='video-frame'>
        <img src={videosrc}/>
        <a href='youtube.com/watch?v=6KSKn9xIxUQ'><FaPlay className='play-icon'/></a>
    </div>      
        
        </div>

   )
  }


export default VideoFrame
