import React, { useEffect } from "react";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Loginsuccess from "./Components/Authentication/SuccessMessages/Loginsuccess";
import Loginunsuccess from "./Components/Authentication/ErrorMessages/Loginunsuccess";
import Regsuccess from "./Components/Authentication/SuccessMessages/Regsuccess";
import Regunsuccess from "./Components/Authentication/ErrorMessages/Regsunsuccess";

import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Payment from "./Components/Payment/Payment";
import CheckPayment from "./Components/Payment/CheckPayment";
import Success from "./Components/PaymentStatus/Success";
import Failure from "./Components/PaymentStatus/Failure";
import Profile from "./Components/Profile/profile";
import Cards from "./Components/Cards/Cards";
import Terms_conditions from "./Components/Permissions/terms_conditions";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuthToken } from "./Components/Custom/LoginDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Privacy_policy from "./Components/Permissions/privacy_policy";
import Contactus from "./Components/Permissions/contactus";
import Cancelation_refund from "./Components/Permissions/cancelation_refund";
import Shipping_policy from "./Components/Permissions/shipping_policy";
import ScrolltoTop from "./Components/Custom/ScrolltoTop";

function App() {
  const token = getAuthToken();
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <div className="main">
          <ScrolltoTop></ScrolltoTop>
          <Sidebar />
          <Routes>
            {token ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/loginunsuccess" element={<Loginunsuccess />}></Route>
            <Route path="/regsuccess" element={<Regsuccess />} />
            <Route path="/regunsuccess" element={<Regunsuccess />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="Payment/:id" element={<CheckPayment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Payment/success" element={<Success />} />
            <Route path="/Payment/failure" element={<Failure />} />
            <Route path="/terms&conditions" element={<Terms_conditions />} />
            <Route path="/privacy&policy" element={<Privacy_policy />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/refund&cancellation" element={<Cancelation_refund />} />
            <Route path="/shipping_policy" element={<Shipping_policy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
