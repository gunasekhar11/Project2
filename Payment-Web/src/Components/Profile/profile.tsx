import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import "./profile.css";
import { Link } from "react-router-dom";
import { getAuthName, getAuthToken } from "../Custom/LoginDetails";
import { get } from "http";

const Profile = () => {
  const token = getAuthToken()
  const name = getAuthName()
  return (
    <>
      <div className="profile">
        <div className="profile-btn">
          <CgProfile className="icons" />
          <h3>My Profile</h3>
          <FiSettings className="icons" />
        </div>
        {token ? (
                  <div className="profile-details">
                  <div className="details">
                    <h3>Personal Information</h3>
                    <div>
                      <p>{name}</p>
                    </div>
                    <h3>Gender</h3>
                    <div>
                      <p>Male</p>
                    </div>
                    <h3>Email Address</h3>
                    <div>
                      <p>{name}</p>
                    </div>
                    <h3>Mobile Number</h3>
                    <div>
                      <p>+91 9381278735</p>
                    </div>
                  </div>
                </div>
        ) : (
          <div className="vh-100" style={{textAlign:"center"}}>
            <h3 style={{marginTop:"30px"}}>Please Login To View Profile</h3>
            <Link to="/login">
              <button className="btns btn btn-dark">Login</button>
            </Link>
          </div>
        )}

      </div>
    </>
  );
};

export default Profile;
