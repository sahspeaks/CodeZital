import './Footer.css'
import React from "react";
import { Link } from 'react-router-dom';
import Edumindz2 from '../assets/images/Edumindz2.png'
export default function Footer() {
  return (
    // {/* <!-- footer section starts  --> */}
<>
    <div className="footer">

    <div className="box-container">

      <div className="box">
        <img src={Edumindz2} alt="logo" />
        <div className="social-icons">
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span><i className="fab fa-facebook-f"></i></span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span><i className="fab fa-twitter"></i></span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span><i className="fab fa-instagram"></i></span>
            </li>
            <li className="icon github">
              <span className="tooltip">Github</span>
              <span><i className="fab fa-github"></i></span>
            </li>
            <li className="icon linkedin">
              <span className="tooltip">Linkedin</span>
              <span><i className="fab fa-linkedin"></i></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="box">
        <h3>quick links</h3>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/courses">courses</Link>
        <Link to="contact">contact</Link>
      </div>


      <div className="box">
        <h3>contact info</h3>
        <div className="info">
          <i className="fas fa-phone"></i>
          <p> +91-9999999999 <br /> </p>
        </div>
        <div className="info">
          <i className="fas fa-envelope"></i>
          <p> teamnewbies@gmail.com <br /></p>
        </div>
        <div className="info">
          <i className="fas fa-map-marker-alt"></i>
          <p> Tirupati, India - 517501 </p>
        </div>
      </div>

    </div>

    <h1 className="credit"> &copy; copyright @ 2023 by The Newbies </h1>

  </div>
  </>

  // {/* <!-- footer section ends --> */}
  );
}
