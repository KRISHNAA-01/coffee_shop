import React from 'react'
import Header from '../Components/Header'
import './About.css'
const About = () => {
  return (
        <div className='ccontainer1'>
    
        <Header/><br /><br /><br /><br />
          <center style={{padding:'100px'}}>
            <h2>About Us</h2>
            <h3>This is a dummy website , only developed for learning purpose. 
              To know more about the developer,click on the link given below.</h3>
            <a  target="_blank"  href="https://drive.google.com/uc?export=download&id=1WILY5NJ-2CE-6WG6H9-EwXq4XDoGJoy2"><button  style={{backgroundColor:'blue',borderRadius:'12px', color:'white', padding:'5px'}} className='b'> view my Resume</button></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi, quaerat commodi nobis quas aut eveniet voluptas culpa aliquid quod odio facere quam libero voluptatibus quo et necessitatibus dolore. Non.</p>
          </center>
          
        
    </div>
  )
}

export default About