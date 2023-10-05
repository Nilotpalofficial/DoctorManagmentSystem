import React from 'react';
import './Dropdownmenu.css';

const Dropdownmenu = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12'>
      <div className='my-button'>
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Patient Care
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href=" ">Find A Doctor</a></li>
          <li><a className="dropdown-item" href=" ">Appalo Surgery</a></li>
          <li><a className="dropdown-item" href=" ">Clinical Quality and Outcomes</a></li>
          <li><a className="dropdown-item" href=" ">Service Excellence</a></li>
          <li><a className="dropdown-item" href=" ">Patient Testimonials</a></li>
          <li><a className="dropdown-item" href=" ">Value Added Services</a></li>
          <li><a className="dropdown-item" href=" ">Health and Lifestyle</a></li>
          <li><a className="dropdown-item" href=" ">Pay Online</a></li>
          <li><a className="dropdown-item" href=" ">Medical Feed</a></li>
        </ul>
      </div>

      {/* Centres of Excellence */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Centres of Excellence
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Cardology</a></li>
          <li><a className="dropdown-item" href=" ">Orthopedics</a></li>
          <li><a className="dropdown-item" href=" ">Spine</a></li>
          <li><a className="dropdown-item" href=" ">Neurology And Neurosurgery</a></li>
          <li><a className="dropdown-item" href=" ">Gastroenterology</a></li>
          <li><a className="dropdown-item" href=" ">Oncology</a></li>
          <li><a className="dropdown-item" href=" ">Transplants</a></li>
          <li><a className="dropdown-item" href=" ">ICU</a></li>
          <li><a className="dropdown-item" href=" ">Emergency</a></li>
          <li><a className="dropdown-item" href=" ">Preventive Health</a></li>
          <li><a className="dropdown-item" href=" ">Robotics</a></li>
          <li><a className="dropdown-item" href=" ">Bariatric Surgery</a></li>
          <li><a className="dropdown-item" href=" ">Nephrology And Urology</a></li>
          <li><a className="dropdown-item" href=" ">Colorectal Surgery</a></li>
          <li><a className="dropdown-item" href=" ">Obstetrics and Gynaecology</a></li>
          <li><a className="dropdown-item" href=" ">Pulmonology</a></li>
        </ul>
      </div>

      {/* Health Information */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Health Information
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Diseases and Conditions</a></li>
          <li><a className="dropdown-item" href=" ">Tests & Procedures</a></li>
          <li><a className="dropdown-item" href=" ">Medical Glossary Decoded</a></li>
          <li><a className="dropdown-item" href=" ">Understanding Investigations</a></li>

        </ul>
      </div>

      {/* International Patient */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          International Patient
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Plan Your Trip</a></li>
          <li><a className="dropdown-item" href=" ">Online Consultation</a></li>
          <li><a className="dropdown-item" href=" ">Visa</a></li>
          <li><a className="dropdown-item" href=" ">Apollo Insurance</a></li>

        </ul>
      </div>

      {/* Academics & Research */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Academics & Research
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Courses</a></li>
          <li><a className="dropdown-item" href=" ">Academics</a></li>
          <li><a className="dropdown-item" href=" ">Clinical Research</a></li>
          <li><a className="dropdown-item" href=" ">Honors List</a></li>
          <li><a className="dropdown-item" href=" ">Apollo Torch:Alumni Network</a></li>
          <li><a className="dropdown-item" href=" ">The Apollo University,Chittor</a></li>
          <li><a className="dropdown-item" href=" ">Apollo Knowledge Series</a></li>
          <li><a className="dropdown-item" href=" ">New in Medicine</a></li>
        </ul>
      </div>

      {/* Hospitals */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hospitals
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Hospitals in Ahmedabad </a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Bilaspur</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Guwahati</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Kakinada</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Mumbai</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Nellore</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Clinics</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Aragonda</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Bhopal</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Hyderabad</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Karur</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in madurai</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Noida</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Cradle</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Bangalore</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Chennai</a></li>
          <li><a className="dropdown-item" href=" ">Hospitals in Kolkata</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Contact Us
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Post A Query</a></li>
          <li><a className="dropdown-item" href=" ">Consult Doctores Online</a></li>
          <li><a className="dropdown-item" href=" ">Book Physical Appointment</a></li>
          <li><a className="dropdown-item" href=" ">Apollo Lifeline</a></li>

        </ul>
      </div>

      {/* Corporate */}
      <div className="btn-group">
        <button
          type="button"
          className="dropdown-toggle custom-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Corporate
        </button>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href=" ">Company Overview </a></li>
          <li><a className="dropdown-item" href=" ">Corporate Policies</a></li>
          <li><a className="dropdown-item" href=" ">Management</a></li>
          <li><a className="dropdown-item" href=" ">Corporate Governance</a></li>
          <li><a className="dropdown-item" href=" ">Corporate Actions</a></li>
          <li><a className="dropdown-item" href=" ">Sustainability</a></li>
          <li><a className="dropdown-item" href=" ">Investor Relations</a></li>
          <li><a className="dropdown-item" href=" ">Awards & Accolades</a></li>
          <li><a className="dropdown-item" href=" ">Careers</a></li>
          <li><a className="dropdown-item" href=" ">News And Media</a></li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Dropdownmenu;
