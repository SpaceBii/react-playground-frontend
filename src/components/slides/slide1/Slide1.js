import React from 'react'
import { useState, useEffect } from 'react'
import './Slide1.css'
import { sliderData } from './slider-data'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const Slide1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;
    // slideLength = 1 2 3 4 5 
    // currentSlide = 0 1 2 3 4

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }

    function auto() {
      slideInterval = setInterval(nextSlide,intervalTime)
    }
   
    useEffect(() => {
      setCurrentSlide(0)
    }, [])
    
    useEffect(() => {
      if (autoScroll) {
        auto()
      }
      return () => clearInterval(slideInterval)
    }, [currentSlide])


  return (
    <div className='slide-1'>
    <FaAngleDoubleLeft  className='arrow prev'onClick={prevSlide} />
    <FaAngleDoubleRight className='arrow next'onClick={nextSlide} />

    {sliderData.map((slide, index) => {
        return (
            <div className={index === currentSlide ? 
            "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <div>
                    <img src={slide.image} width="100%" height="100%" alt="slide"></img>
                    <div className='content'>
                        <h2>{slide.heading}</h2>
                        <p>{slide.desc}</p>
                        <hr />
                        <button className='--btn--btn-primary'></button>
                    </div>
               </div>
                
              )}
            </div>
        )
    })}
    </div>
  )
}

export default Slide1
