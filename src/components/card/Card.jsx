import React from 'react'
import './Card.css'
import Test from './books.jpg'

const Card = (movie) => {
  
  let img_path = "https://image.tmdb.org/t/p/w342";
  return (
    <div className='movie'>
       <div className='conteinera'>
        <img src={Test} className='poster' alt='Poster'></img>
        </div>
        <div className='movie-details'>
            <div className='box'>
                <h4 className='movie-title'>Movie Title</h4>
                <p className='rating'>9.7</p>
            </div>
            <div className='overview'>
                <h1>{}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam.</p>
            </div>
        </div>
    </div>
  )
}

export default Card