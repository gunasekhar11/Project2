import React from "react";
import SideBarProfile from "./SideProfile/SideBarProfile";
import WalletBar from "./Wallet-Bar/walletBar";
import PaymentFetures from "./Payment-Features/paymentFeatures";
import PieChart from "./PieChart/pieChart";
import "./Home.css";
import { BsSearch } from "react-icons/bs";
import { GetApiCall } from "../Custom/CommonHTTP";
import { authHeaders, user_details } from "../Custom/ApiEndpoints";

const Home = () => {
  const Fetch_User:any = GetApiCall(user_details,authHeaders)
  const user = Fetch_User?.data;
  // console.log("user",Fetch_User)
  return (
    <div className="home">
      <div>
        <div className="search">
          <input
            type="text"
            className="form-control input-search"
            placeholder="Search..."
          />
          &nbsp;&nbsp;
          <BsSearch
            className="ui-icons"
            style={{ position: "relative", right: "50px" }}
          />
        </div>
        <WalletBar walletprice={user?.wallet_balance} />
        {/* <PieChart /> */}
        <PaymentFetures />
      </div>
      <div>
        <SideBarProfile />
      </div>
    </div>
  );
};

export default Home;
