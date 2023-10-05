import React from 'react';
import './Descmt.css';

const Descmt = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className='cstm-fluid'>
              <div className='mainbox'>
              <div className='upheading'>
               <h2>Disclaimer</h2>
               </div>
                <div className="image-boxes">
                  <div className="image-box">
                  <div className='imguptext'>
                  <h6>Transplant Disclaimer</h6>
                  </div>
                    <div className='1stimg'>
                      <img className='disclamier_img_radius' src="https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/transplant-disclaimer-min.jpg" alt="Image 1" />
                    </div>
                    <div className='imgdowntext'>
                    <p>It has been brought to our notice that some people have received emails purporting to offer money for kidney donation and misusing the....</p>
                    </div>
                    <div className='downreadmore'>
                    <a href="https://www.apollohospitals.com/departments/transplantation/transplant-disclaimer/" class="text-warning">Read More <i class="fa fa-long-arrow-right"></i> </a>
                    </div>
                  </div>
                  <div className="image-box">
                  <div className='imguptext'>
                  <h6>Recruitment Disclaimer</h6>
                  </div>
                    <div className='1stimg'>
                      <img className='disclamier_img_radius' src="https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/recruitment-disclaimer-min.jpg" alt="Image 2" />
                    </div>
                    <div className='imgdowntext'>
                      <p>Apollo Hospitals Enterprise Limited brings to your attention that persons not authorized by the Company are circulating/posting fake...</p>
                    </div>
                    <div className='downreadmore'>
                    <a href="https://www.apollohospitals.com/departments/transplantation/transplant-disclaimer/" class="text-warning">Read More <i class="fa fa-long-arrow-right"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Descmt;
