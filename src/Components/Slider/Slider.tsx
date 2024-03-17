import { useState } from 'react';
import './Slider.css'
import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from 'react-icons/fa';










const Slider = ( {slides}) => {

  const [currentIndex,setCurrentIndex]=useState(0);


const goToPrevious =()=>{
  const isFirstSlide =currentIndex===0;
  const newIndex =isFirstSlide ? slides.length-1 : currentIndex -1
  setCurrentIndex(newIndex);
  
  
  
  }



  const goToNext =()=>{
    const isLastSlide =currentIndex===slides.length-1;
    const newIndex =isLastSlide ? 0: currentIndex +1
    setCurrentIndex(newIndex);
    
    
    
    }

    const goToSlide = slideIndex =>{
      setCurrentIndex(slideIndex)
    }

  return (
    <div className="hero-container">
        
      <div className='hero-info'>
          <img src={`${slides[currentIndex].url}`}/>
          <div className='hero-describe'>
           <span>{slides[currentIndex].title}</span>
           <h2>{slides[currentIndex].description}</h2>
           </div>
      </div>
        <div className='slider-nav'>
          <button type='button' className='btn--prev' onClick={goToPrevious}>
            <FaChevronCircleLeft className='fa-left'/>
          </button>
          <button type='button' className='btn--next' onClick={goToNext}>
            <FaChevronCircleRight className='fa-right'/>
          </button>
          
        </div>
        <div className='slider-footer'>
          {slides.map((slide,slideIndex)=>(
            <FaCircle key={slideIndex} className='dots' onClick={()=>{
              goToSlide(slideIndex)
            }}/>
          ))}
        </div>
      </div>

        
      

  )
}

export default Slider
