import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from "../assets/menu.png";
import cart from "../assets/shopping-cart.png";
import './Header.css';

const Header = () => {
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <div className='main' style={{ display: 'flex' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/"><img id='logo' src="https://www.shutterstock.com/image-vector/coffee-lover-260nw-261481031.jpg" alt="logo" /></Link>
        <Link to="/"><h1>Brewery's Hut</h1></Link>
      </div>

      <div className='navitems' style={{ display: 'flex', alignItems: 'center' }}>
        <div className={`nav-links ${isopen ? 'show' : ''}`}>
          <Link className='anchor' to="/">Home</Link>
          <Link className='anchor' to="/About">About Us</Link>
          <Link className='anchor' to="/Menu">Our Menu</Link>
        </div>

        <Link to="#">
          <img className='icon2' src={cart} alt="cart icon" />
        </Link>

        <button onClick={toggleMenu} className="menu-button">
          <img className='icon2 menu-toggle' src={menu} alt="menu icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
