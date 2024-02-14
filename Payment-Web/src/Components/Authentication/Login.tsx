import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { get_token } from "../Custom/ApiEndpoints";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const loginDetails = new URLSearchParams();
    loginDetails.append("username", email);
    loginDetails.append("password", pword);

    axios
      .post(get_token, loginDetails.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // console.log(response.data);
        const Token = response.data.access_token;

        if (Token) {
          // console.log("Login successful!", Token);
          const cookies = new Cookies();
          cookies.set("jwt_authorisation", Token);
          window.location.href = "/";
        } else {
          console.log("Login unsuccessful!");
          window.location.href = "/loginunsuccess";
        }
      })
      .catch((err) => {
        console.log(err.message);
        // window.location.href = "/loginunsuccess";
      });
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="card card-login" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">
                <div className="mb-md-3 mt-md-4 pb-1">
                  <h2 className="mb-2 login-name">Sign in</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        placeholder="Enter email or mobile number"
                        className="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <input
                        type="password"
                        id="typePasswordX"
                        placeholder="Password"
                        className="form-control form-control-lg"
                        onChange={(e) => setPword(e.target.value)}
                        required
                      />
                    </div>

                    <p className="small mb-4 pb-lg-2 text-end">
                      <a style={{ color: "#B0B0B0" }} href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <div className="text-center">
                      <button
                        className="btn login-btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
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
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="fw-bold text-dark text-decoration-none"
                    >
                      &nbsp;Sign Up
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

export default Login;
