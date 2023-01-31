import React, {useState} from 'react'
import './LoginPopup.css'
import { Button } from 'react-bootstrap';
import RegPopup from '../reg-popup/RegPopup';
import {FaUserAlt, FaKey, FaFacebookSquare, FaYoutube, FaInstagram, FaTwitterSquare, FaGithub} from 'react-icons/fa'

function LoginPopup(props) {
    const [buttonPopup,setButtonPopup] = useState(false);
  return (props.trigger) ? (
    <div className='login-popup'>
        <div className='inner-popup'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
            <div className='login-form'>
               <h1>Welcome !</h1>
               <p>You can log in with your personel account or you can link you social-media accout to our platform!</p>
               <br></br>
               <form>
               <FaUserAlt/>
               <input className='acc-inp' type="text" placeholder="Account Name"></input>
               <br></br>
               <FaKey/>
               <input className='pass-inp' type="password" placeholder="Password Here"></input>
               <br></br>
               <Button className='log-btn' type='submit'>Log In</Button>
               </form>
               <br></br>
               <p>if you dont have an account you allways can <a href='#' className='reg-link' onClick={() =>setButtonPopup(true)}>register</a> for free.</p>
               <RegPopup trigger={buttonPopup} setTrigger={setButtonPopup} />
               <hr></hr>
               <h3>Link your account:</h3>
               <FaFacebookSquare className='conn'/>
               <FaYoutube className='conn' />
               <FaInstagram className='conn' />
               <FaTwitterSquare className='conn' />
               <FaGithub className='conn' />
            </div>
        </div>
    </div>
  ) : "";
}

export default LoginPopup

