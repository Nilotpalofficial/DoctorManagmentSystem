import React from 'react';
import './Barsection.css';

const Healthcare = () => {
  return (
    <div className='container-fluid'>
    <div className='allthingsmain'>
      <div className='row '>
      <div className='col-12 col-md-7'>
        <div className='mainthiong'>
              <div className='leftpart'>
                <div className='text-details'>
                  <h1>Why Choose Apollo Healthcare?</h1>
                  <p>Established by Dr. Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 120 countries</p>
                </div>
                
                <div className='firstrow'>
                  <div className='firstline'>
                    <div className='card-portion d-flex gap-3'>
                      <div className='img-part'>
                        <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/healinghands.svg' alt='' />
                      </div>
                      <div className='text-part flex-grow-1'>
                        <h4><span className="counter-holder">73</span>+</h4>
                        <p>Largest private healthcare network of Hospitals</p>
                      </div>
                    </div>
                    <div className='card-portion d-flex gap-3'>
                      <div className='img-part'>
                        <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg' alt='' />
                      </div>
                      <div className='text-part flex-grow-1'>
                        <h4><span className="counter-holder">400</span>+</h4>
                        <p>Largest private network of clinics across India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='firstrow'>
                  <div className='firstline'>
                    <div className='card-portion d-flex gap-3'>
                      <div className='img-part'>
                        <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/adavanced.svg' alt='' />
                      </div>
                      <div className='text-part flex-grow-1'>
                        <h4><span className="counter-holder">1,100</span>+</h4>
                        <p>Diagnostic centres across India</p>
                      </div>
                    </div>
                    <div className='card-portion d-flex gap-3'>
                      <div className='img-part'>
                        <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg' alt='' />
                      </div>
                      <div className='text-part flex-grow-1'>
                        <h4><span className="counter-holder">500</span>+</h4>
                        <p>Pharmacies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='firstrow'>
                  <div className='firstline'>
                    <div className='card-portion d-flex gap-3'>
                      <div className='img-part'>
                        <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg' alt='' />
                      </div>
                      <div className='text-part flex-grow-1'>
                        <h4><span className="counter-holder">10,000</span>+</h4>
                        <p>Pin codes Served across India</p>
                      </div>
                    </div>
                    <div className='card-portion d-flex gap-3'>
                      <div className='img-part'>
                        <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg' alt='' />
                      </div>
                      <div className='text-part flex-grow-1'>
                        <h4><span className="counter-holder">11,000</span>+</h4>
                        <p>Doctors</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5'>
              <div className='rightpart'>
                <div className='imgright'>
                  <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/whychoseapollo_ah.webp' alt='' />
                </div>
              </div>
            </div>
      </div>
    </div>
    </div>
  );
}

export default Healthcare;
