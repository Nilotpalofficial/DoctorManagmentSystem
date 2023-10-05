import React from 'react';
import Header1 from './Header1';
import Home from './Card';
import Nevbar from './Nevbar';
import Barsection1 from './Barsection1';
import Healthcare from './Healthcare';
import Dropdownmenu from './Dropdownmenu';
import Footer from './Footer';
import DoToday from './DoToday';
import Descmt from './Descmt';
import Worldcare from './Worldcare';
import Location from './Location';
import './Header.css';
import Descm1 from './Descm1';
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className='col-12'>
          <div className='top_header'>
            <div className="col-6 top-left custom-margin1">
              <a href='/'><i className="fab fa-facebook icon-spacing"></i></a>
              <a href='/'><i className="fab fa-instagram icon-spacing"></i></a>
              <a href='/'><i className="fab fa-twitter icon-spacing"></i></a>
              <a href='/'><i className="fab fa-youtube icon-spacing"></i></a>
              <a href='/'><i className="fab fa-linkedin icon-spacing"></i></a>
           </div>
            <div className="col-6 top-right custom-margin">
            
              <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/recognition.png' className='logo img-fluid' alt='/'></img>
              <a href='/' className='nav-link1'>Privacy Policy</a>
              <a href='/' className='nav-link1'>Disclaimer</a>
              <a href='/' className='nav-link1'>Contact</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      <Nevbar/>
      <Dropdownmenu/>
      <Header1/>
      <Home/>
      <Barsection1/>
      <Healthcare/>
      <Worldcare/>
      <Descm1/>
      <Descmt/>
      <Location/>
      <DoToday/>
      <Footer/>
      
    </>
  )
}

export default Header;
