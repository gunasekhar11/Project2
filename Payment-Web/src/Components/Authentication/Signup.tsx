import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { create_user } from "../Custom/ApiEndpoints";
import GoogleButton from "react-google-button";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmitt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== reenterPassword) {
      alert("Password Miss Matched");
    } else if (isChecked === false) {
      alert("* Accept Terms & Conditions And Privacy & Policy");
    } else {
      const data = {
        username: email,
        email: email,
        first_name: name,
        last_name: name,
        password: password,
      };

      axios
        .post(create_user, data)
        .then((response) => {
          // console.log(response.data);
          alert("User Created Click 'Ok' to Login");
          window.location.href = "/login";
        })
        .catch((error) => {
          console.error(error);
          window.location.href = "/regunsuccess";
        });
    }
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="card card-login" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">
                <div className="mb-md-3 mt-md-4 pb-1">
                  <h2 className="mb-2 login-name">Sign up</h2>
                  <form onSubmit={handleSubmitt}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        placeholder="Enter email or mobile number"
                        className="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        placeholder="Create Password"
                        className="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        placeholder="Re-enter Password"
                        className="form-control form-control-lg"
                        onChange={(e) => setReenterPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I understand and agree to the
                        <Link
                          to="/terms&conditions"
                          className="fw-bold text-dark text-decoration-none"
                        >
                        &nbsp;terms & conditions&nbsp;
                        </Link>
                        of use and 
                        <Link
                          to="/privacy&policy"
                          className="fw-bold text-dark text-decoration-none"
                        >
                        &nbsp;privacy policy
                        </Link>
                      </label>
                    </div>
                    <br />
                    <div className="text-center d-grid">
                      <button className="btn login-btn " type="submit">
                      Create account
                      </button>
                    </div>
                  </form>
                  <div className="mt-4 pt-1">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <GoogleOAuthProvider clientId="342487029539-9amlsnhpp3e24grhpouju8vnl1taooei.apps.googleusercontent.com">
                        <GoogleLogin
                          onSuccess={(response) => {
                            console.log(response);
                            const jwtToken = response?.credential;
                            if (jwtToken) {
                              const details = jwt_decode(jwtToken);
                              console.log(details);
                            } else {
                              console.error("JWT token not found in response");
                            }
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </GoogleOAuthProvider>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-0 text-center">
                    Already have an account?
                    <Link
                      to="/login"
                      className="fw-bold text-dark text-decoration-none"
                    >
                      &nbsp;Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
