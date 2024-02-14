import React from "react";
import "./Footer.css";
import logo from "../Assets/Logo.png"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} className="logo" alt="logo" />
        <Link to="/terms&conditions" style={{color:"white"}}><p>Terms & Conditions</p></Link>
        <Link to="/privacy&policy" style={{color:"white"}}><p>Privacy Policy</p></Link>
        <Link to="/refund&cancellation" style={{color:"white"}}><p>Refund & Cancellation</p></Link>
        <Link to="/shipping_policy" style={{color:"white"}}><p>Ship & Delivery Policy</p></Link>
        <Link to="/contactus" style={{color:"white"}}><p>Contact Us</p></Link>
      </div>
    </div>
  );
};
