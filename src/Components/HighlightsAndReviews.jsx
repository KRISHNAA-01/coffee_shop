import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const HighlightsAndReviews = () => {
  return (
    <div className="container my-5">

      {/* Highlights Section */}
      <div className="text-center mb-5">
        {/* <a href="https://drive.google.com/file/d/1WILY5NJ-2CE-6WG6H9-EwXq4XDoGJoy2/view" download={true}> view the resume</a> */}
        <h2 className="mb-4">Why People Love Brewrey's Hut</h2>
        <div className="row">
          <div className="col-md-3">
            <i className="bi bi-cup-hot fs-1 text-primary"></i>
            <h5 className="mt-2">Premium Coffee</h5>
            <p>Only the finest beans, brewed to perfection.</p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-cake2 fs-1 text-primary"></i>
            <h5 className="mt-2">Fresh Treats</h5>
            <p>Handcrafted pastries and baked delights daily.</p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-wifi fs-1 text-primary"></i>
            <h5 className="mt-2">Free Wi-Fi</h5>
            <p>Perfect for work, study, or just chilling.</p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-clock-history fs-1 text-primary"></i>
            <h5 className="mt-2">Open Daily</h5>
            <p>7 AM to 10 PM – we’re here for your coffee fix!</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="text-center">
        <h2 className="mb-4">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">“The coffee is out of this world. Brew Haven is my morning ritual!”</p>
                <h6 className="card-subtitle mt-3 text-muted">– Sarah L.</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">“I love the cozy vibe and the friendly staff. It feels like home.”</p>
                <h6 className="card-subtitle mt-3 text-muted">– James T.</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">“Best place in town to chill, sip, and get some work done.”</p>
                <h6 className="card-subtitle mt-3 text-muted">– Priya M.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HighlightsAndReviews;
