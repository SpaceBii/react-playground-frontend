import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import './RegPopup.css'
import {FaUserAlt, FaKey, FaPhp} from 'react-icons/fa'
import {AiOutlineMail}from 'react-icons/ai'

function RegPopup(props) {
  return (props.trigger) ? (
    <div className='reg-popup'>
        <div className='reg-inner-popup'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
            <div className=''>
              <form action='post'>
                <h1>Register.</h1>
                <br></br>
                <hr></hr>
                <Col>
                <div>
                  <p className='reg-text'>First Name:</p>
                  <input className='reg-inp' type="test" placeholder='John...'></input>
                  </div>
                  <div>
                  <p className='reg-text'>Last Name:</p>
                  <input className='reg-inp' type="test" placeholder='Doe...'></input>
                  </div>
                  <div>
                  <p className='reg-text'>Date of birth:</p>
                  <input className='reg-inp' type="numbers" placeholder='1979/06/12...'></input>
                  </div>
                </Col>
                <Col>
                <FaUserAlt />
                <p className='reg-text'>Account Name:</p>
                <input className='reg-inp' type="text" placeholder="This is your nickname..."></input>
                </Col>
                <Col>
                  <FaKey />
                  <p className='reg-text'>Password:</p>
                  <input className='reg-inp' type="password" placeholder='More than 6 digits...'></input>
                </Col>
                <Col>
                  <FaKey />
                  <p className='reg-text'>Repeat Password:</p>
                  <input className='reg-inp' type="password" placeholder='Your password again...'></input>
                </Col>
                <Col>
                  <AiOutlineMail />
                  <p className='reg-text'>E-mail Address:</p>
                  <input className='reg-inp' type="text" placeholder='asdfg@abv.bg...'></input>
                </Col>
                <Row>
                  <div>
                <input className='reg-imp' type="checkbox"></input>
                <p className='reg-text'>Click if you agree with our Policy.Read it <a target="_blank" rel="noopener noreferrer" href='https://www.privacypolicies.com/blog/privacy-policies-legally-required/'>Here.</a></p>
                </div>
                <div>
                <input className='reg-imp' type="checkbox"></input>
                <p className='reg-text'>Click if you want to receive E-mails from us.</p>
                </div>
                </Row>
                <Button className='cancel-btn' type='cancel'>Cancel</Button>
                <Button className='submit-btn' type='submit'>Register</Button>
                </form>
            </div>
        </div>
    </div>
  ) : "";
}

export default RegPopup

