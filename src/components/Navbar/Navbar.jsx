import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { RiCloseLine } from 'react-icons/ri';
import { SlMenu } from 'react-icons/sl';

const Menu = () => 
    <ul>
      <li> <a href="#home">Home</a> </li>
      <li> <a href="#about">About</a> </li>
      <li> <a href="#cars">Cars</a> </li>
      <li> <a href="#awards">Awards</a> </li>
      <li> <a href="#contact">Contact Us</a> </li>
    </ul>
  


const Navbar = () => {
  const [ toogleMenu, setToogleMenu ] = useState(false);

  return (
    <nav className="asphalt__navbar">
      <div className="asphalt__navbar-logo">
        <img src={logo} alt="logo"></img>
      </div>

      <div className="asphalt__navbar-links asphalt__fontbase">
        <Menu/>
      </div>

      <div className="asphalt__navbar-sign asphalt__fontbase">
        <a href="#login">Log in  / Registration</a>
        <div></div>
        <a href="#agency">Agency Cars</a>
      </div>

      <div className="asphalt__navbar-menu asphalt__fontbase">
        { 
          toogleMenu ?
          <div className="asphalt__navbar-menu-overlay scale-up-top">
            <RiCloseLine id="RiCloseLine" size={27} color="#FFF" onClick={ () => {setToogleMenu(false)} } />
            <Menu/>
          </div>
          :
          <SlMenu size={32} color="#FFF" onClick={ () => {setToogleMenu(true)} } />
        }
      </div>
    </nav>
  )
}

export default Navbar