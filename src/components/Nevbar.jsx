import React from 'react'
import './Newmanubar.css'
import  Logoop from "../Img/logo2.png"
const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12'>
    <div className="menu-bar">
      <div className="menu-left">
        <div className="logo2nd">
          <img src={Logoop}alt="Logo" />
        </div>
      </div>
      <div className="menu-center">
        <div className="search-bar">
          <input type="text" placeholder="Search Doctor or Hospital" />
          <button><i class="fas fa-search"></i></button>
        </div>
      </div>
      <div className="menu-right">
        <div className="emergency-help">
          <div className="emergency">Emergency</div>
          <div className='boxpart'><marquee><i class="fas fa-phone-alt"></i>9002205488</marquee></div>
        </div>
        <div className="emergency-help">
          <div className="emergency">Help Line</div>
          <div className='boxpart'><marquee><i class="fas fa-phone-alt"></i>9002205488</marquee></div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;