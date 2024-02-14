import React, { useState } from "react";
import "./SideBarProfile.css";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { getAuthName } from "../../Custom/LoginDetails";
import { Link } from "react-router-dom";
import { GetApiCall } from "../../Custom/CommonHTTP";
import {
  user_details,
  authHeaders,
  transactions_url,
  Baseurl,
} from "../../Custom/ApiEndpoints";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  const tabStyle = {
    borderBottom: "2px solid blue", // Adjust the color as needed
    color: "blue",
  };

  const username = getAuthName();

  const FetchTransactions: any = GetApiCall(Baseurl+"wallet_history", authHeaders);
  const transactions: any[] = FetchTransactions?.data;
  // console.log("transactions",transactions)

  return (
    <div className="sidebar-home">
      <div className="profile-home w-100">
        <div className="profile-home-logo me-2">
          <Link to="/profile" style={{ color: "black" }}>
            <BiUserCircle className="icons" />
          </Link>
        </div>
        <div className="profile-home-info text-start">
          <p>{username}</p>
          <p>Last connection :</p>
          <p>yesterday at 4:30pm</p>
        </div>
      </div>
      <hr />
      <div className="quick-transfer text-start">
        <p className="h6">Quick Transfer</p>
        <div className="contacts">
          <BiUserCircle className="icons" />
          <BiUserCircle className="icons" />
          <BiUserCircle className="icons" />
          <BiUserCircle className="icons" />
          <AiOutlinePlusCircle className="icons" />
        </div>
      </div>
      <div className="transactions text-start">
        <p className="h6 mb-2">Last Transactions</p>
        <div className="transaction-layout">
        {transactions?.map((transaction, index) => (
                <div key={index} className="transaction-card">
                  <BiUserCircle className="icons" />
                  <div>
                    <p>Amount: {transaction.amount}</p>
                    <p>Date: {transaction.transaction_time.slice(0,10)}</p>
                  </div>
                  <p>{transaction.status}</p>
                </div>
              ))}
        </div>
        {/* <div style={{ color: "black" }}>
          <ul className="nav" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                style={activeTab === "pills-home" ? tabStyle : {}}
                onClick={() => handleTabClick("pills-home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                style={activeTab === "pills-profile" ? tabStyle : {}}
                onClick={() => handleTabClick("pills-profile")}
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                style={activeTab === "pills-contact" ? tabStyle : {}}
                onClick={() => handleTabClick("pills-contact")}
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="tab-content mt-4">
            <div
              className={`tab-pane fade ${
                activeTab === "pills-home" ? "show active" : ""
              }`}
              style={{display:"flex",flexDirection:"column-reverse"}}
            >
              {transactions?.map((transaction, index) => (
                <div key={index} className="transaction-card">
                  <BiUserCircle className="icons" />
                  <div>
                    <p>Amount: {transaction.amount/100}</p>
                    <p>Date: {transaction.transaction_time.slice(0,10)}</p>
                  </div>
                  <p>{transaction.status}</p>
                </div>
              ))}
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "pills-profile" ? "show active" : ""
              }`}
              style={{display:"flex",flexDirection:"column-reverse"}}
            >
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "pills-contact" ? "show active" : ""
              }`}
              style={{display:"flex",flexDirection:"column-reverse"}}
            >
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
