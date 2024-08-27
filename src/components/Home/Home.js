// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-main-container'>
      <hr className="horizontal-line" />
      <div className="details-container">
        <h2 className="cursor-animation" style={{ animationDelay: '0s' }}>Hai I'm</h2>
        <h1 className="cursor-animation name-h1">Veeranandhan V J</h1>
        <h2 className="cursor-animation" style={{ color: '#C778DD', animationDelay: '7s' }}>Software Engineer</h2>
        <a href="./resume/Veeranandhan_vj_software_engineer.pdf" download="Veeranandhan_vj_software_engineer.pdf">
          <button type="submit">Resume &rarr;</button>
        </a>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Home;
