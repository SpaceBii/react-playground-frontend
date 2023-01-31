import React,{useState} from 'react'
import Portf from './big-guy-bg.png'
import Projects from './projects3small.jpg'
import ProjectsB from './projects2big.jpg'
import AboutMe from './projects1.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap-grid.css'
import {Row, Col} from 'react-bootstrap'
import './Portfolio.css'
import Slide1 from '../slides/slide1/Slide1'
import {Parallax} from 'react-parallax'
import ParaProj from './parbg.jpg'


const Portfolio = () => {
  return (
  <div className='conteiner portfolio'>
    <Row style={{  backgroundImage: `url("https://cutewallpaper.org/21/church-announcements-powerpoint-backgrounds/Free-download-Church-Announcements-Announcement-Backgrounds-.jpg")` }} className='intro'>
      <Col className='col-md-4 bigGuy'>
        <div className='bigguy'>
        <img className='guy' src={Portf} width='450px' alt='Me'></img>
        </div>
      </Col>
      <Col className='col-md-8 information'>
      <div className=''>
        <img src={AboutMe} width='450px' className='workplace' alt='Workplace'></img>
        </div>
        <div className='proj-text'>
        <p className='inf-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta. Dolor delectus beatae consectetur consequatur nemo quae impedit cum ea. Assumenda, impedit aperiam minima, eos nostrum incidunt pariatur dolorem iure magni eveniet porro ullam ipsum dolor hic placeat nihil, voluptatibus deleniti et. Quas, ex. Repudiandae id nesciunt quam maiores error quae dolores, cupiditate neque? Facere ab porro mollitia ipsum ea harum perferendis molestias ipsa, quasi eius eligendi sint dolorum unde, magni id? Minima reprehenderit enim laboriosam.</p>
        </div>
        <div className='slider'>
        <Slide1 className="slider" />
        </div>
      </Col>
    </Row>
    <Parallax className='para-proj' strength={600} bgImage={ParaProj}>
    <Row>
     <div id='projects'>
     <img src={Projects} weidth='90px' height='90px' alt='Projects' className='title-img'></img>
     <h1 className='title proj-title'>Projects<span className='line'></span></h1>
     </div>
    </Row>
    <hr className='proj-line'></hr>
    <Row>
    <Col className='col-md-4'>
        <div>
          <img src={ProjectsB} width='240px' alt='Portfolio' className='my-proj-1'></img>
          <p className='my-proj-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta.</p>
        </div>
      </Col>
      <Col className='col-md-4'>
        <div>
          <img src={ProjectsB} width='240px' alt='Portfolio' className='my-proj-2'></img>
          <p className='my-proj-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta.</p>
        </div>
      </Col>
      <Col className='col-md-4'>
        <div>
          <img src={ProjectsB} width='240px' alt='Portfolio' className='my-proj-3'></img>
          <p className='my-proj-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta.</p>
        </div>
      </Col>
    </Row>
    </Parallax>
</div>
  );
}

export default Portfolio;