// src/components/Home/Home.js
import React from 'react';
import './Home.css';
// import { useNavigate } from 'react-router-dom';
import MyMenu from '../myMenu/myMenu';

const Home = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/menu'); // Change this to the route you want to navigate to
  // };
  return (
    <div className='home-main-container'>
      <hr className="horizontal-line" />
      <div className="details-container">
        <h2 className="cursor-animation" style={{ animationDelay: '0s', paddingTop:'40px'}}>Hai I'm</h2>
        <h1 className="cursor-animation name-h1">Veeranandhan V J</h1>
        <h2 className="cursor-animation" style={{ color: '#C778DD', animationDelay: '7s' }}>Software Engineer</h2>
        <p style={{fontFamily:'inherit'}}><span style={{color:'#2e95d3'}}>const </span><span style={{color:'#2a907b'}}>githublink</span>
        <span style={{color:'white'}}>=</span> 
        <span style={{color: '#e99287'}}>"https://github.com/vjveeranandhan"</span></p>
        {/* <a href="./resume/Veeranandhan_vj_software_engineer.pdf" download="Veeranandhan_vj_software_engineer.pdf"> */}
          {/* <button type="submit" onClick={handleClick} >Menu &rarr;</button> */}
        {/* </a> */}
      </div>
      <MyMenu/>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Home;
