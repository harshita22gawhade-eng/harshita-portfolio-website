import React, { useState } from "react";
import './services.css';

const Services =()=>{
 const [toggleState, setToggleState] = useState(0);
 const toggleTab =(index) =>{
    setToggleState(index);
 }

    return(
      <section className="services section" id="services">
  <h2 className="section_title">Services</h2>
  <span className="section_subtitle">What Can I Offer</span>
  <div className="services_container container grid">
    
    <div className="services_content">
      <div>
        <i className="uil uil-code-branch services_icon"></i>
        <h3 className="services_title">Full-Stack Web Development</h3>
      </div>
      <span className="services_button" onClick={() => toggleTab(1)}>
        View More <i className="uil uil-arrow-right services_button-icon"></i>
      </span>
      <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
        <div className="services_modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
          <h3 className="services_modal-title">Full-Stack Web Development</h3>
          <p className="services_modal-description">
            I build high-performance, scalable web applications using React.js for the frontend, .NET for the backend, and SQL Server for the database.
          </p>
          <ul className="services_modal-services grid">
            <li className="services_modal-service">
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-Info">Custom Frontend Development with React.js</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-Info">Robust backend APIs using ASP.NET Core and .NET</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-Info">SQL Server Database Design & Optimization</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="services_content">
      <div>
        <i className="uil uil-database services_icon"></i>
        <h3 className="services_title">Database Solutions</h3>
      </div>
      <span className="services_button" onClick={() => toggleTab(2)}>
        View More <i className="uil uil-arrow-right services_button-icon"></i>
      </span>
      <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
        <div className="services_modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
          <h3 className="services_modal-title">Database Solutions</h3>
          <p className="services_modal-description">
            I offer scalable and efficient database solutions using SQL Server, including design, optimization, and integration with web applications.
          </p>
          <ul className="services_modal-services grid">
            <li className="services_modal-service">
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-Info">Database Schema Design and Optimization</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-Info">Complex SQL Queries & Stored Procedures</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-check-circle services_modal-icon"></i>
              <p className="services_modal-Info">Data Migration & Integration</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Services;