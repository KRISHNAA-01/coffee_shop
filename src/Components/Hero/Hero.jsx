import React from 'react';
import Header from '../Header';

const Hero = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item  ">
            <img src="https://images2.alphacoders.com/129/1294573.jpg" className="d-block w-100" alt="Coffee shop interior" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Brew Haven</h5>
              <p>Your daily escape with the aroma of freshly brewed coffee and cozy vibes.</p>
            </div>
          </div>

          <div className="carousel-item ">
            <img src="https://wallpapers.com/images/hd/hot-coffee-in-a-coffee-cup-with-coffee-beans-tjr1dy5o0lazx2pc.jpg" className="d-block w-100" alt="Signature coffee" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Our Signature Blend</h5>
              <p>Crafted from the finest beans — rich, bold, and unforgettable flavor in every sip.</p>
            </div>
          </div>

          <div className="carousel-item active">
            <img src="https://wallpaperaccess.com/full/9524787.jpg" className="d-block w-100" alt="Cozy café ambiance" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Experience the Atmosphere</h5>
              <p>Relax, connect, and unwind in a space made for comfort and community.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
