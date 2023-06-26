import React, { useContext, useState } from "react";

import { admin } from "../assets/data/admin";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../api/userApi";

import { UserContext } from "../context";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });

  const { user, setUser } = useContext(UserContext)


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    login(userDetails).then((res) => {
      sessionStorage.setItem("userId", res.id)
      setUser(res)
      navigate('/')
    }).catch((err) => {
      alert("Invalid Credential")
    })
  }

  return (
    <div className="login-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">Login</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    {/* <label className="form-control-label">USERNAME</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="EMAIL"
                      value={userDetails.email}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    {/* <label className="form-control-label">PASSWORD</label> */}
                    <input
                      type="password"
                      className="form-control"
                      placeholder="PASSWORD"
                      value={userDetails.password}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, password: e.target.value })}
                      i
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text" />
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary" onClick={handleLogin}>
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
