import React, { useState } from "react";

import { admin } from "../assets/data/admin";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [adminDetails, setAdminDetails] = useState({
    userId: "",
    password: ""
  });

  const navigate = useNavigate();

  const checkAdmin = () => {
    if (adminDetails.userId === admin.userId && adminDetails.password === admin.password) {
        sessionStorage.setItem("isAdmin", true);
        navigate("/")
    } else {
        alert("Invalid Credentials")
    }
  }

  return (
    <div className="login-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2" />
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true" />
            </div>
            <div class="col-lg-12 login-title">ADMIN PANEL</div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    {/* <label class="form-control-label">USERNAME</label> */}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="USERNAME"
                      value={adminDetails.userId}
                      onChange={(e) =>
                        setAdminDetails({ ...adminDetails, userId: e.target.value })}
                    />
                  </div>
                  <div class="form-group">
                    {/* <label class="form-control-label">PASSWORD</label> */}
                    <input
                      type="password"
                      class="form-control"
                      placeholder="PASSWORD"
                      value={adminDetails.password}
                      onChange={(e) =>
                        setAdminDetails({...adminDetails, password: e.target.value })}
                      i
                    />
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text" />
                    <div class="col-lg-6 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary" onClick={checkAdmin}>
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
