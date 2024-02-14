import logo from "../Assets/logo_maang.svg";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import "./Header.css";
import { Link } from "react-router-dom";
import { getAuthToken } from "../Custom/LoginDetails";
import { getAuthName , Logout} from "../Custom/LoginDetails";
import { useState } from "react";

const Home2 = () => {
  const [toggeler, setToggler] = useState(false);
  const token = getAuthToken();
  const name = getAuthName();
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {token ? (
          <>
            <div className="search">
              <input type="text" placeholder="Search" />
              <BiSearch className="search-icon" />
            </div>
            <div className="profile-layout" style={{ textAlign: "center" }}>
              <BiUserCircle
                className="icons"
                onClick={() => setToggler(!toggeler)}
              />
              <p style={{marginBottom:"0px"}}>{name}</p>
              {toggeler ? (
                <div className="toggeler">
                  <Link to="/profile">
                    <li>Profile</li>
                  </Link>
                  <Link to="#">
                    <li>Bank</li>
                  </Link>
                  <a href="/">
                    <li onClick={()=>{Logout()}}>Logout</li>
                  </a>
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div className="navlinks">
              <Link to="/login" className="text-decoration-none">
                <p>Login</p>
              </Link>
              <p>/</p>
              <Link to="/signup" className="text-decoration-none">
                <p>SignUp</p>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home2;
