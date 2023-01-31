import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap-grid.css'
import {Row} from 'react-bootstrap'
import BooksSmall from './bookssm.jpg'
import BooksBig from './bookbig.jpg'
import Card from '../card/Card'
import './Books.css'
import {Parallax} from 'react-parallax'
import BookBg from './bookbg.jpg'


const Books = () => {
  return (
    <div className='conteiner' id='books'>
      <div style={{  backgroundImage: `url("https://cdn-5e5150f5f911c807c41ebdc8.closte.com/wp-content/uploads/magic-quadrant-iiot-platforms-900x400.jpg")` }} className="books-intro">
        <div>
         <img src={BooksSmall} alt='Books' width='90px' className='title-img'></img>
         <h1 className='title books-title'>Books<span className='line-3'></span></h1>
        </div>
        <hr className='proj-line'></hr>
        <div className='books-info'>
         <img src={BooksBig} alt='Books' height={760} className='col-md-7 books-img'></img>
         <p className='col-md-5 books-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta. Dolor delectus beatae consectetur consequatur nemo quae impedit cum ea. Assumenda, impedit aperiam minima, eos nostrum incidunt pariatur dolorem iure magni eveniet porro ullam ipsum dolor hic placeat nihil, voluptatibus.</p>
        </div>
      </div>
      <Parallax strength={-600} blur={{min: -22, max: 20}} bgImage={BookBg}>
      <div className='movie-resu'>
        <Card className='posters' />
        <Card className='posters' />
        <Card className='posters' />
        <Card className='posters' />
        <Card className='posters' />
        <Card className='posters' />
        <Card className='posters' />
        <Card className='posters' />
      </div>
      </Parallax>

    </div>
  )
}

export default Books
