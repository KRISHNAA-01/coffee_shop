import React, { useState } from 'react';
import menu from "../assets/menu.png";;
import cart from "../assets/shopping-cart.png";;
import './Header.css'


const Header = () => {
  const[isopen,setIsopen]=useState(false);
  const toggleMenu=()=>{
    setIsopen(!isopen);
  }


  return (
    <div className='main' style={{display:'flex'}}>
      <div style={{display:'flex',alignItems:'center'}}>
       <a href="/"><img id='logo'  src="https://www.shutterstock.com/image-vector/coffee-lover-260nw-261481031.jpg" alt="" /></a> 
        <a href="/"><h1>Brewery's Hut</h1></a>
      </div>
      <div className='navitems' style={{display:'flex',alignItems:'center'}}>
        <div className={`nav-links ${isopen? 'show': ''}`}>
          <a className='anchor' href="/">Home</a>
          <a className='anchor' href="/About">About Us</a>
          <a className='anchor' href="/Menu">Our Menu</a>
          </div>
          <a><img className='icon2' src={cart} alt="cart icon image" /></a>
         <a onClick={toggleMenu}><img className='icon2 menu-toggle' src={menu} alt="menu icon image" /></a> 
          

      </div>
    </div>
  )
}

export default Header














// import React from 'react'
// import './Header.css'
// const Header = () => {
//   return (
//     <div>
//         {/* <img src="https://www.shutterstock.com/image-vector/coffee-lover-260nw-261481031.jpg" alt="" /> */}
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a className="navbar-brand" href="/"> <img src="https://www.shutterstock.com/image-vector/coffee-lover-260nw-261481031.jpg" alt="" /></a>
//         <a class="navbar-brand" href="/"> <h1 style={{fontFamily: 'Lucida Handwriting'}}>Brewrey's &nbsp;Hut</h1></a>

//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav ">
//         <a class="nav-link active" aria-current="page" href="/">Home</a>
//         <a class="nav-link" href="/About">About Us</a>
//         <a class="nav-link" href="/Menu">Our Menu</a>
//         {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
//       </div>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Header


