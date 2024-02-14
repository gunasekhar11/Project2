import React, { useState } from "react";
import { AiOutlineMobile, AiFillCar ,AiOutlineLeftCircle} from "react-icons/ai";
import { RiRestaurantLine, RiMotorbikeLine } from "react-icons/ri";
import { LiaCreditCardSolid } from "react-icons/lia";
import {BiUpArrowCircle} from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { PiSquaresFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./paymentFeatures.css";

const PaymentFetures = () => {
  const [moreButton, setMoreButton] = useState(false);

  return (
    <div className="features-layout">
    <h4 className="font-bold"  style={{textAlign:"left"}}>Features</h4>
    <div className="features">
      <div className="each">
        <AiOutlineMobile
          className="icons"
          style={{ backgroundColor: "blue" }}
        />
        <p>Mobile</p>
      </div>
      <div className="each">
        <AiFillCar className="icons" style={{ backgroundColor: "green" }} />
        <p>Car</p>
      </div>
      <div className="each">
        <RiRestaurantLine
          className="icons"
          style={{ backgroundColor: "orange" }}
        />
        <p>Food</p>
      </div>
      <div className="each">
        <Link to="/card" style={{ textDecoration: "none", color: "black" }}>
          <LiaCreditCardSolid
            className="icons"
            style={{ backgroundColor: "red" }}
          />
          <p>Cards</p>
        </Link>
      </div>
      <div className="each">
        <BsCart className="icons" style={{ backgroundColor: "blue" }} />
        <p>Online</p>
      </div>
      <div className="each">
        <RiMotorbikeLine
          className="icons"
          style={{ backgroundColor: "green" }}
        />
        <p>Bike</p>
      </div>
      <div className="each">
        <GiElectric className="icons" style={{ backgroundColor: "orange" }} />
        <p>Electricity</p>
      </div>
      <div className="each">
        <Link to="/card" style={{ textDecoration: "none", color: "black" }}>
          <LiaCreditCardSolid
            className="icons"
            style={{ backgroundColor: "red" }}
          />
          <p>Cards</p>
        </Link>
      </div>
      <div className="each">
        <BsCart className="icons" style={{ backgroundColor: "blue" }} />
        <p>Online</p>
      </div>
      <div className="each">
        <RiMotorbikeLine
          className="icons"
          style={{ backgroundColor: "green" }}
        />
        <p>Bike</p>
      </div>
      <div className="each">
        <GiElectric className="icons" style={{ backgroundColor: "orange" }} />
        <p>Electricity</p>
      </div>

      {!moreButton ? (
        <div className="each" onClick={() => setMoreButton(!moreButton)}>
          <PiSquaresFourBold
            className="icons"
            style={{ backgroundColor: "grey" }}
          />
          <p>More</p>
        </div>
      ) : (
        <>
          <div className="each">
            <RiMotorbikeLine
              className="icons"
              style={{ backgroundColor: "green" }}
            />
            <p>Bike</p>
          </div>
          <div className="each">
            <GiElectric
              className="icons"
              style={{ backgroundColor: "orange" }}
            />
            <p>Electricity</p>
          </div>
          <div className="each">
            <RiMotorbikeLine
              className="icons"
              style={{ backgroundColor: "green" }}
            />
            <p>Bike</p>
          </div>
          <div className="each">
            <GiElectric
              className="icons"
              style={{ backgroundColor: "orange" }}
            />
            <p>Electricity</p>
          </div>
          <div className="each">
            <RiMotorbikeLine
              className="icons"
              style={{ backgroundColor: "green" }}
            />
            <p>Bike</p>
          </div>
          <div className="each" onClick={()=>setMoreButton(!moreButton)}>
            <BiUpArrowCircle
              className="icons"
              style={{ backgroundColor: "white" , color:"black"}}
            />
            <p>Collapse</p>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default PaymentFetures;
