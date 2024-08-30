import React from 'react';
import './myMenu.css';

const MyMenu = () => {
    return (
    <div className='main-container'>
        <h3 style={{textAlign:'center', color:'#C778DD', fontFamily:'Chakra Petch', fontSize: '40px'}}>['Menu']</h3>
        <div className='container'>
            <div className='box-container'>
                <p style={{fontFamily:'inherit'}}>
                    <span style = {{color:'#a6a6a6'}}>5</span>
                    &nbsp;&nbsp;&nbsp;<span style={{color:'#2e95d3'}}>class  </span><span style={{fontSize:'60px', color:'#f22c3d'}}>about</span><span style={{color:'white'}}>:</span>
                    <br></br>
                    <span style = {{color:'#a6a6a6'}}>8</span>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{color:'#2e95d3'}}>def</span> <span style={{color:'#f22c3d'}}>__init__</span><span style={{color:'white'}}>(self, name, experiance, qualification)</span><span style={{color:'white'}}>:</span>
                    <br></br>
                    <span style = {{color:'#a6a6a6'}}>13</span>
                    <span style={{color:'white'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    self.name = name
                    </span>
                    <br></br>
                    <span style = {{color:'#a6a6a6'}}>21</span>
                    <span style={{color:'white'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    self.experiance = experiance
                    </span>
                    <br></br>
                    <span style = {{color:'#a6a6a6'}}>34</span>
                    <span style={{color:'white'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    self.qualification = qualification
                    </span>
                </p>
            </div>
            <div className='box-container'>
                <p style={{fontFamily:'inherit', fontSize:'14px'}}>
                <pre>
                <>
                    <span style={{ color: '#07ecf0' }}>const</span> <span style={{ color: 'white' }} >apiClient = axios.</span>
                    <span style={{color: '#f59700'}}>create</span>
                    <span style={{ color: '#07ecf0' }}>{'('}</span>
                    <span style={{ color: '#b630db' }}>{'{'}</span>
                    <><br /><span style={{ color: '#7d51c9' }}>baseURL</span></>
                    <span style={{ color: 'white' }}>:</span>
                    <span style={{ color: 'rgb(199, 120, 221)' }}>'http://107.21.158.38:8000/'</span><span style={{color:'white'}}>,</span><br />
                    <span style={{ color: '#7d51c9' }}>headers</span>
                    <span style={{ color: 'white' }}>:</span>
                    <span style={{ color: '#f59700' }}>{'{'}</span><br />
                    <span style={{ color: 'rgb(199, 120, 221)' }}>'Content-Type'</span><span style={{color:'white'}}>:</span><span style={{ color: 'rgb(199, 120, 221)' }}>'application/json'</span><span style={{color:'white'}}>,</span><br />
                    <span style={{ color: 'rgb(199, 120, 221)', fontSize:'50px' }}>'Projects'</span>
                    <br className="conditional-br" />
                    <span style={{color:'white'}}>:</span><span style={{ color: 'rgb(199, 120, 221)' }}>'personal/academic'</span><span style={{color:'white'}}>,</span><br />
                    <span style={{ color: '#f59700' }}>{'}'}</span><span style={{color:'white'}}>,</span><br />
                    <span style={{ color: '#b630db' }}>{'}'}</span>
                    <span style={{ color: '#07ecf0' }}>{')'}</span>
                    <span style={{ color: 'white' }}>{';'}</span>     
                </>
            </pre>
                </p>
            </div>
            <div className='box-container'></div>
        </div>
    </div>
    );
};

export default MyMenu;
