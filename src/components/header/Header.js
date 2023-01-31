import React, {useState, setTrigger} from "react";
import Logo from "./mylogo.png";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap-grid.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
  NavLink
} from "react-bootstrap";
import Popup from '../overlay-login/LoginPopup.js';

const Header = () => {
  const [buttonPopup,setButtonPopup] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-pic" src={Logo} alt="Logo"></img>
      </div>
      <Nav className="menu row-colls-md-6">
        <Navbar className="">
          <NavLink href="#">Home</NavLink>
          <NavLink className="link" href="#projects">
            Projects
          </NavLink>
          <NavLink className="link" href="#movies">
            Movies
          </NavLink>
          <NavDropdown className="link" title="Books">
            <Dropdown.Item href="#books">Books</Dropdown.Item>
            <Dropdown.Item href="#">Sci-fi</Dropdown.Item>
            <Dropdown.Item href="#">Novels</Dropdown.Item>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
          </NavDropdown>
          <NavLink className="link" href="#aboutus">
            About Us
          </NavLink>
        </Navbar>
          <div className="row-colls-md-2">
          <Button onClick={() => setButtonPopup(true)} className="log">Log In</Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
          </div>
      </Nav>
    </div>
  );
};

export default Header;
