import React from "react";
import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";
import { BsCircleHalf } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import "./walletBar.css";
import { Link } from "react-router-dom";

interface Props {
  walletprice: number;
}

const WalletBar2: React.FC<Props> = ({ walletprice }) => {
  const wallet:number = walletprice
  return (
    <div className="walletbar">
      <div className="buttons-layout">
        <div className="buttons">
          <Link to="/payment">
            <AiOutlineArrowUp className="icons" />
          </Link>
          <p>Send</p>
        </div>
        <div className="buttons">
          <Link to="/payment">
            <AiOutlinePlus className="icons" />
          </Link>
          <p>Top&nbsp;Up</p>
        </div>
      </div>
      <div className="wallet">
        <div className="price">
          <p>wallet</p>
          <h1 className="h4" style={{ fontWeight: "bold" }}>
            ₹&nbsp;{wallet}
          </h1>
        </div>
        <div className="wallet-logo">
          <MdOutlinePayments className="ui-icons icons" />
        </div>
      </div>
    </div>
  );
};

export default WalletBar2;
