import React from 'react';

const Header1 = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='second-cf'>
          <div className='row'>
            <div className="col-12">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ah_mothersaday_dsk.png" className="d-block w-100" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/07/pcr_newah.jpg" className="d-block w-100" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/08/prohealh_dsk_ah.jpg" className="d-block w-100" alt="..."></img>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
