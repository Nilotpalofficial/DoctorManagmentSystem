import React, { useState } from 'react';
import './Barsection1.css';

const Barsection1 = () => {
  const [showSpecialtiesContent, setShowSpecialtiesContent] = useState(true);
  const [showProHealthContent, setShowProHealthContent] = useState(false);

  const handleSpecialtiesClick = () => {
    setShowSpecialtiesContent(true);
    setShowProHealthContent(false); 
  };

  const handleProHealthClick = () => {
    setShowSpecialtiesContent(false); 
    setShowProHealthContent(true);
  };

  return (
    <>
    <div className='container-fluid'>
    <div className='bar'>
      <div className='row'>
        <div className='col-12'>
          <div className='My_button'>
            <button onClick={handleSpecialtiesClick}>Specialties</button>
            <button onClick={handleProHealthClick}>ProHealth</button>
          </div>
          </div>
          </div>
          </div>
          {showSpecialtiesContent ? (
            <div className='container-fluid specialties-content'>
            <div className='row'>
              <div className='col-12'>
                <div className='specialties-heading'>
                    <h1>Explore our Centres of Clinical Excellence</h1>
                    <p>Learn about the world class health care we provide</p>
                </div>
                </div>
                </div>
              <div className='row'>
              <div className='col-5'>
              <div className='image-container'>
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp" alt="Specialties" />
              </div>
              </div>
              <div className='col-7'>
              <div className='row mb-4 '>
              <div className="d-flex flex-row">
              <div className='specialties-cards'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/cardiology_icon.svg' alt='..'></img>
                <h5>Cardiology</h5>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg' alt='..'></img>
                <h5>Neurology</h5>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gastroenterology.svg' alt='..'></img>
                <h5>gastroenterology</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/orthopaedic.svg' alt='..'></img>
                <h5>orthopaedic</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/oncology_icon.svg' alt='..'></img>
                <h5>Oncology</h5>
              </div>
              </div>
             </div>
              </div>
              <div className='row mb-4'>
              <div className="d-flex flex-row">
              <div className='specialties-cards'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gynecology.svg' alt='..'></img>
                <h5>Gynecology</h5>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dermatology.svg' alt='..'></img>
                <h5>Dermatology</h5>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ophthalmology.svg' alt='..'></img>
                <h5>Ophthalmology</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/paediatricurology.svg' alt='..'></img>
                <h5>Pediatrics</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/endocrinology.svg' alt='..'></img>
                <h5>Endocrinology</h5>
              </div>
              </div>
             </div>
              </div>
                <div className='row mb-4'>
                <div className="d-flex flex-row">
              <div className='specialties-cards'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Urology</h5>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Nephrology</h5>
              </div>
              
 
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Pulmonology</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Rheumatology</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Neurosurgery</h5>
              </div>
              </div>
             </div>
                </div>
                <div className='row mb-4'>
                <div className="d-flex flex-row">
              <div className='specialties-cards'>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Radiology</h5>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Plastic surgery</h5>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Neonatology</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Vascular Surgery</h5>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Psychiatry</h5>
              </div>
              </div>
             </div>
                </div>
                <div className='row mb-4'>
                <div className="d-flex flex-row">
              <div className='specialties-cards'>

              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>Dentistry</h5>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg' alt='..'></img>
                <h5>ENT<br/>(Ear,Nose,Throat)</h5>
              </div>
              </div>
             </div>
                </div>
                
             </div>

            </div>
            
            </div>
          ) : null}
          {showProHealthContent ? (
            <div className='container-fluid'>
            <div className='row prohealth-content'>
            <div className='col-12 col-md-5'>
                <div className='image-container'>
                <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth.jpg" alt="ProHealth" />
              </div>
              </div>
              <div className='col-12 col-md-7'>
              <div className='description'>
                <h1>Get proactive - Be ProHealth !</h1>
                <h4>Build your ProHealth plan now</h4>
                <div className="description-text">
                  <p>
                  ProHealth Program is a unique end-to-end personalized proactive health program that brings together predictive risk analysis, doctor-curated health packages, cutting-edge diagnostics with expert evaluation, and a personalized path to wellness,
                  designed to make positive shifts – making you healthier.
                  </p>
                  <p>
                  This health program is based on Apollo's pioneering efforts in preventive care for almost 40 years and over 22 million health checks.
                  </p>
                  <p>
                  Apollo ProHealth program can PREDICT health risks, help PREVENT ailments, and OVERCOME lifestyle diseases where possible.
                  </p>
                </div>
                <button className="book-appointment-button left-align">Book ProHealth</button>
              </div>
            </div>

            
            </div>
            </div>
          ) : null}
          
      
  </div>
  </>
  );
};

export default Barsection1;
