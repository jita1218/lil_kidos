
import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import Imag from './dreamkids.png';

const Header = () => {
  return (
   
    <div className="header">

      <div className="logo"><img src={Imag} alt='logo' ></img></div>
      <div className="home"><Link to="#">home</Link></div>

      <div className="home"><Link to='/image'>Images</Link></div>
      <div className="home"><Link to ='/video'>videos</Link></div>
      <a href="#about" className='home'>About us</a>
      <div className="images"><Link to ='/login'>Login</Link></div>
    </div>
   
  )
}

export default Header
