import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap-grid.css'
import {Button, Col, Row} from 'react-bootstrap'
import MovieImg from './movies.jpg'
import MovieBig from './moviebig.jpg'
import Slide1 from '../slides/slide1/Slide1'
import './Movies.css'
import Card from '../card/Card'
import {Parallax} from 'react-parallax'
import ParM from './moviebg.jpg'
let API_key = '&api_key=8f62c4fae9dde4d141e877b90544e1b7'
let base_url = 'https://api.themoviedb.org/3'
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key


const Movies = () => {
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/discover/movie? 
  //      api_key=${API_key}&language=en- 
  //      US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //        let res = data.result
  //        res = res.map(item => {
  //           const { ...release_date} = item 
  //        return {...release_date}
  //        })
        
  //       Movies(res);
  //       console.log(Movies);
  //     })
  //     .catch((err) => console.error(err));
  //   },[]);
  // const [movieData, setData] = useState([]);
  // const [url_set, setUrl] = useState(url);

  // useEffect(() => {
  //   fetch(url_set).then(res => res.json()).then(data =>{
  //     let res = data.results
  //     res = res.map(item => {
  //       const { ...release_date} = item
  //       return { ...release_date}
  //     })
  //     setData(data.results);
  //   });
  // },[url_set])
  return (
    <div className='conteiner' id='movies'>
        <Row style={{  backgroundImage: `url("https://cutewallpaper.org/21/pink-blue-wallpapers/1920x1080-Pink-Purple-And-Blue-Wallpaper-HD-Wallpapers-.jpg")` }} className="movie-intro" >
          <div>
            <img src={MovieImg} width='90px' height='90px' className='title-img' alt='Movie Tag'></img>
            <h1 className='title movie-title'>Movies<span className='line-2'></span></h1>
          </div>
          <hr className='proj-line'></hr>
          <Col>
          <div className='movie-big-box'>
          <img src={MovieBig} className=' col-md-7 movie-big' alt='Movie' width='450px'></img>
          </div>
          <p className='col-md-5 movie-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta. Dolor delectus beatae consectetur consequatur nemo quae impedit cum ea. Assumenda, impedit aperiam minima, eos nostrum incidunt pariatur dolorem iure magni eveniet porro ullam ipsum dolor hic placeat nihil, voluptatibus.
          <Slide1 />
          </p>
          </Col>
        </Row>
      <Parallax bgClassName='bgmovie' strength={300} blur={{min: -12, max: 15}} bgImage={ ParM }>
      <div className='movie-resu'>
           {/* { 
            (movieData.length == 0) ? <p className='notfound'>Not Found</p> : movieData.map ((res, pos) => {
              return(
                <Card info={res} key={pos}/>
              )
            })
           } */}
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
};

export default Movies