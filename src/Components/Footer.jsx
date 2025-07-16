import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Brewrey's Hut</p>
        <p className="small">Crafted with love, one cup at a time ☕</p>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="#" className="text-muted">Instagram</a>
          <a href="#" className="text-muted">Facebook</a>
          <a href="#" className="text-muted">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
