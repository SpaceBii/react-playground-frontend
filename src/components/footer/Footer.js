import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap-grid.css'
import {Row, Col, NavLink} from 'react-bootstrap'
import './Footer.css'
import Brand1 from './brand-1.jpg'
import Brand2 from './brand-2.jpg'
import Brand3 from './brand-3.jpg'
import Brand4 from './brand-4.jpg'
import Brand5 from './brand-5.jpg'
import Brand6 from './brand-6.jpg'
import AboutUs from './aboutmes.jpg'
import Mission1 from './mission-1.jpg'
import Mission2 from './mission-2.jpeg'
import Mission3 from './mission-3.png'
import Logo from './mylogo.png'
import {FaFacebookSquare, FaYoutube, FaInstagram, FaTwitterSquare, FaGithub} from 'react-icons/fa'
import { Parallax } from 'react-parallax'
import AboutBg from './bg-end.png'

const Footer = () => {
  return (
 <div className='conteiner'>
  <div style={{  backgroundImage: `url("https://i.pinimg.com/originals/06/32/ba/0632baa46729021a7c3e272c3dbc7172.jpg")` }} className='about-intro'>
   <Row className='aboutus'>
     <div>
      <img src={AboutUs} width='90px' className='title-img' id='aboutus' alt='About Us'></img>
      <h1 className='title about-title'>About Us<span className='line-4'></span></h1>
     </div>
   </Row>
   <hr className='proj-line'></hr>
    <div>
      <h2 className='about-mini-title'>Our Mission is to Improve</h2>
       <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio non aliquam hic molestiae expedita optio molestias corrupti excepturi suscipit a similique laudantium temporibus, dolorem est vel dolore soluta. Dolor delectus beatae consectetur consequatur nemo quae impedit cum ea. Assumenda, impedit aperiam minima, eos nostrum incidunt pariatur dolorem iure magni eveniet porro ullam ipsum dolor hic placeat nihil, voluptatibus.</p>
      <img src={Mission1} width={300} className="mission-img end-pic-1" alt='Data Science'></img>
      <img src={Mission2} width={300} className="mission-img end-pic-2" alt='Data Science'></img>
      <img src={Mission3} width={300} className="mission-img end-pic-3" alt='Data Science'></img>
    </div>
  </div>
  <Parallax bgClassName='end-bg' strength={-350} bgImage={AboutBg}>
    <Row className='brands'>
        <div className='#'>
         <img src={Brand1} alt='Brand' className="col-md-2 col-sm-4 brand"></img>
         <img src={Brand2} alt='Brand' className="col-md-2 col-sm-4 brand"></img>
         <img src={Brand3} alt='Brand' className="col-md-2 col-sm-4 brand"></img>
         <img src={Brand4} alt='Brand' className="col-md-2 col-sm-4 brand"></img>
         <img src={Brand5} alt='Brand' className="col-md-2 col-sm-4 brand"></img>
         <img src={Brand6} alt='Brand' className="col-md-2 col-sm-4 brand"></img>
        </div>
      </Row>
      <Row>
        <Col className='proj-info col-md-4'>
          <img src={Logo} alt='Logo' className='logo-footer' width={200}></img>
          <p><span className='info-bold'>Address</span>: Example Street 98, HH2 BacHa, New York, USA</p>
          <p><span className='info-bold'>Phone:</span> +18088 234 5678</p>
          <p><span className='info-bold'>E-mail</span>: suport@hastech.com</p>
        </Col>
        <Col className='proj-info col-md-4'>
        <div className='end-links'>
        <h3>Extras</h3>
        <NavLink href='#' className='link info-links end-links'>Delivery</NavLink>
        <NavLink href='#' className='link info-links end-links'>Contacts</NavLink>
        <NavLink href='#' className='link info-links end-links'>Deals</NavLink>
        <NavLink href='#' className='link info-links end-links'>Stores</NavLink>
        <NavLink href='#' className='link info-links end-links'>AboutUs</NavLink>
        </div>
        </Col>
        <Col className='conn-us col-md-3'>
          <h3 className='end-title'>Stay Connected</h3>
          <FaFacebookSquare className='stay-conn'/>
          <FaYoutube className='stay-conn' />
          <FaInstagram className='stay-conn' />
          <FaTwitterSquare className='stay-conn' />
          <FaGithub className='stay-conn' />
        </Col>
      </Row>
      <hr className='proj-line'></hr>
      <Row className='col-md-12'>
        <div className='end'> 
        <p>Copyright© 2022 <span className='info-bold'>Space B. design</span>. All Right Reserved.</p>
        <p>Design by Space B. Design</p>
        </div>
      </Row>
      </Parallax>
    </div>
  )
}

export default Footer
