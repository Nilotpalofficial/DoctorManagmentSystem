import React from 'react';
import './Location.css'; 
import { useState } from 'react';

const Location1 = () => {
  const [currentImage, setCurrentImage] = useState('https://cdn.apollohospitals.com/dev-apollohospitals/2020/09/apollo-home-ahmedabad-01.jpg');

  const handleImageChange = (imageName) => {
    switch (imageName) {
      
       
      case 'ahmedabad':
        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/09/apollo-home-ahmedabad-01.jpg');
        break;
      case 'aragonda':
        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/09/apollo-aragonda-01.jpg');
        break;
      case 'bangalore':
        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-bangalore-01.jpg');
        break;
      case 'bhubaneshwar':
        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2022/04/apollo-hsptl-bhu.jpg');
        break;
        case 'bilaspur':
          setCurrentImage('https://www.apollohospitals.com/wp-content/uploads/2020/11/apollo-cancer-institute-bilaspur.png');
          break;
        case 'bhopal':
            setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ASH-PIC.jpg');
            break;
        case 'chennai':
              setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-chennai.jpg');
              break;
        case 'delhi':
              setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/09/apollo-delhi.png');
              break;
        case 'guwahati':
              setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/10/apollo-guwahati-1.jpg');
              break;
              case 'hyderbad':
              setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-hyderabad-2.jpg');
              break;
              case 'indore':
                setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-indore-2.jpg');
                break;
              case 'kakinada':
                setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/10/apollo-kakinada-1.jpg');
                break;
              case 'karur':
                setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/10/apollo-karur-01.jpg');
                break;
              case 'kolkata':
                setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-hospitals-kolkata-01.jpg');
                break;
              case 'kochi':
                  setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/12/kochi_hospital_apollo.jpg');
                  break;
              case 'luchnow':
                    setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-lucknow-01.jpg');
                    break;
              case 'madurai':
                      setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-madurai-1.jpg');
                      break;
              case 'mumbai':
                      setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/09/apollo-navi-mumbai-1-1.jpg');
                      break;
              case 'mysore':
                      setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-hospital-mysore-2.jpg');
                      break;
              case 'nashik':
                      setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/06/apollo-nashik-2.jpg');
                      break;
                      case 'nellore':
                        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/10/apollo-nellore-1.jpg');
                        break;
                case 'noida':
                        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2023/04/hospitlas-in-india-noida.jpg');
                        break;
                case 'trichy':
                        setCurrentImage('https://www.apollohospitals.com/wp-content/uploads/2020/09/apollo-trichy.jpg');
                        break;
                case 'visakhapatnam':
                        setCurrentImage('https://cdn.apollohospitals.com/dev-apollohospitals/2020/10/apollo-visakhapatnam.jpg');
                        break;
      default:
        setCurrentImage("HEllow");
        break;
    }
  }
  return (
    <>
    <div className='container-fluid'>
      <div className='ah_location_sec'>
        <div className='row d-flex  align-items-center'>
         <div className='col-12 col-md-7'>
           <div className='mainthiong'>
           
                <div className='text-details1'>
                <h4 className="sec_title">LOCATION</h4>
                <h2>Hospitals In India</h2>
                <p>Apollo Group constitutes the best hospital in India with over 10,000 beds across 73 hospitals, 5000+ pharmacies, over 300 clinics, 1100+ diagnostic centres and 200+ Telemedicine units.</p>
                </div>
                <div className='leftpart1'>  
            <div className='specialties-cards mb-4'>
                {/* Add card boxes for Specialties */}
                 <div className="box4 d-flex flex-column align-items-center">
                     <a  onClick={() => handleImageChange('ahmedabad')}  data-hospital-id="5553" id="Hospital_Ahmedabad" className="pg_widget active1">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ahmedabad_city.svg" alt="icon" />
                        <h5>Ahmedabad</h5>
                      </a>
                 </div>
                <div className="box4 d-flex flex-column align-items-center">
                 <a onClick={() => handleImageChange('aragonda')} data-hospital-id="5621" id="Hospital_Aragonda" className="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ahmedabad_city.svg" alt="icon" />
                        <h5>Aragonda</h5>
                      </a>
                </div>
              

                <div className="box4 d-flex flex-column align-items-center">
                     <a onClick={() => handleImageChange('bangalore')} data-hospital-id="5582" id="Hospital_Bangalore" className="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bangalore_city.svg" alt="icon" />
                        <h5>Bangalore</h5>
                      </a>
                </div>

                <div className="box4 d-flex flex-column align-items-center">
                         <a onClick={() => handleImageChange('bhubaneshwar')} data-hospital-id="5627" id="Hospital_Bhubaneshwar" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bhubaneshwar_city.svg" alt="icon"/>
                             <h5>Bhubaneshwar</h5>
                          </a>
                </div>

                <div className="box4 d-flex flex-column align-items-center">
                         <a onClick={() => handleImageChange('bilaspur')} data-hospital-id="5644" id="Hospital_Bilaspur" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bangalore_city.svg" alt="icon"/>
                             <h5>Bilaspur</h5>
                          </a>
                </div>
            </div>
              <div className='specialties-cards mb-4'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
                         <a onClick={() => handleImageChange('bhopal')} data-hospital-id="32966" id="Hospital_Bilaspur" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/lucknow_city.svg" alt="icon"/>
                             <h5>Bhopal</h5>
                          </a>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
                         <a onClick={() => handleImageChange('chennai')} data-hospital-id="5609" id="Hospital_Chennai" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/chennai_city.svg" alt="icon"/>
                             <h5>Chennai</h5>
                          </a>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
                          <a onClick={() => handleImageChange('delhi')} data-hospital-id="5611" id="Hospital_Delhi" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/delhi_city.svg" alt="icon"/>
                             <h5>Delhi</h5>
                          </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                         <a onClick={() => handleImageChange('guwahati')} data-hospital-id="5646" id="Hospital_Guwahati" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/guwahati_city.svg" alt="icon"/>
                             <h5>Guwahati</h5>
                          </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                         <a onClick={() => handleImageChange('hyderabad')} data-hospital-id="5613" id="Hospital_Hyderabad" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/hyderabad_city.svg" alt="icon"/>
                             <h5>Hyderabad</h5>
                          </a>
              </div>
              </div>
              <div className='specialties-cards mb-4'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('indore')} data-hospital-id="5648" id="Hospital_Indore" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/indore_city.svg" alt="icon"/>
                             <h5>Indore</h5>
                          </a>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('kakinada')} data-hospital-id="5650" id="Hospital_Kakinada" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/kakinada_city.svg" alt="icon"/>
                             <h5>Kakinada</h5>
                          </a>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('karur')} data-hospital-id="5652" id="Hospital_Karur" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/kakinada_city.svg" alt="icon"/>
                             <h5>Karur</h5>
                          </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('kolkata')} data-hospital-id="5615" id="Hospital_Kolkata" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/kolkata_city.svg" alt="icon"/>
                             <h5>Kolkata </h5>
                          </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('kochi')} data-hospital-id="14549" id="Hospital_Kochi" class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/kakinada_city.svg" alt="icon"/>
                             <h5>Kochi</h5>
                          </a>
              </div>
              </div>
              <div className='specialties-cards mb-4'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('luchnow')} class="pg_widget">
                             <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/lucknow_city.svg" alt="icon"/>
                             <h5>Luchnow</h5>
                          </a>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('madurai')} id="postid5656" data-hospital-id="5656" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/madurai_city.svg" alt="icon"/>
                        <h5>Madurai</h5>
                     </a>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('mumbai')} data-hospital-id="5619" id="Hospital_Mumbai" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/mumbai_city.svg" alt="icon"/>
                        <h5>Mumbai</h5>
                     </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('mysore')} data-hospital-id="5658" id="Hospital_Mysore" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/mysore_city.svg" alt="icon"/>
                        <h5>Mysore</h5>
                     </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('nashik')} data-hospital-id="5660" id="Hospital_Nashik" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/nashik_city.svg" alt="icon"/>
                        <h5>Nashik</h5>
                     </a>
              </div>
              </div>
              <div className='specialties-cards mb -4'>
                {/* Add card boxes for Specialties */}
              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('nellore')} data-hospital-id="5662" id="Hospital_Nellore" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/lucknow_city.svg" alt="icon"/>
                        <h5>Nellore</h5>
                     </a>
              </div>
              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('noida')} data-hospital-id="32893" id="Hospital_Noida" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/delhi_city.svg" alt="icon"/>
                        <h5>Noida</h5>
                     </a>
              </div>
              

              <div className="box4 d-flex flex-column align-items-center">
              <a onClick={() => handleImageChange('trichy')} data-hospital-id="5666" id="Hospital_Trichy" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/mumbai_city.svg" alt="icon"/>
                        <h5>Trichy</h5>
                     </a>
              </div>

              <div className="box4 d-flex flex-column align-items-center">
                    <a onClick={() => handleImageChange('visakhapatnam')} data-hospital-id="5668" id="Hospital_Visakhapatnam" class="pg_widget">
                        <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/lucknow_city.svg" alt="icon"/>
                        <h5>Visakhapatnam</h5>
                     </a>
              </div>
              </div>
              
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5'>
                <div className='right-description'>
              <div id="hospital-loc-holder" className="location-info">
                <div className="card12 ">
                   {currentImage && <img src={currentImage} alt="Animal" className="card-img-top p-2 rounded-4 img-fluid" />}
                   </div>
                    <div className="py-3">
                     <h5 className="card-title mb-3 fw-bold">Hospitals In Ahmedabad</h5>
                      <div>
                    <div className="row g-3">
                      <div className="col-md-12">
                        <div className="d-flex mb-1">
                          <div className="me-3"> <i className="fas fa-location-dot"></i> </div>
                          <div>Plot No.1A, Bhat GIDC Estate Dist. Airport Gandhinagar Road, Dist. Gandhinagar, Ahmedabad - 382428 Gujarat </div>
                        </div>
                        <div className="py-2">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="tel:+8401801066"> <i className="fa-solid fa-phone fs-6 pe-2"></i> +8401801066</a>
                            </li>
                            <li className="list-inline-item"> <a href="#"></a> <a href="https://www.google.co.in/maps/search/Plot No.1A, Bhat GIDC Estate Dist. Airport Gandhinagar Road, Dist. Gandhinagar, Ahmedabad - 382428 Gujarat"><i
                              className="fa-solid fa-location-arrow"></i></a> </li>
                            <li className="list-inline-item"> <a href="#"></a> <a href="mailto:info@apolloahd.com"><i
                              className="fa-solid fa-envelope"></i></a> </li>
                          </ul>
                        </div>
                        <a href="https://www.apollohospitals.com/hospital/ahmedabad/?utm_campaign=ahmedabad&utm_source=home&utm_medium=hospitals_in_india" className="text-warning text-decoration-none">Read More <i className="fa fa-long-arrow-right ps-2 small"></i> </a>
                      </div>
                    </div>
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

export default Location1;
