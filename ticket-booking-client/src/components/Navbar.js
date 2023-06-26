import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

export default function Navbar() {
  const [role, setRole] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({
      name: "",
      email: "",
      role: ""
    })
    sessionStorage.removeItem("userId")
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          borderRadius: "10px",
          backgroundColor: "#1f1f1f5c",
          color: "#fff"
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h4 style={{ color: "#fff", marginBottom: "5px" }}>Movie Cafe</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/movies" className="nav-link active">
                  <p style={{ color: "#fff", marginBottom: "0px" }}>Movies</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tickets" className="nav-link active">
                  <p style={{ color: "#fff", marginBottom: "0px" }}>
                    {role == 'admin' ? "View Bookings" : "Book Ticket"}
                  </p>
                </Link>
              </li>
              {user.role == "user" &&
                <li className="nav-item">
                  <Link to="/history" className="nav-link active">
                    <p style={{ color: "#fff", marginBottom: "0px" }}>
                      Bookings History
                    </p>
                  </Link>
                </li>}
              {user.role == "admin" &&
                <li className="nav-item">
                  <Link to="/movielist" className="nav-link active">
                    <p style={{ color: "#fff", marginBottom: "0px" }}>
                      Movie List
                    </p>
                  </Link>
                </li>}
            </ul>
            <form className="d-flex" role="search">
              {user.role
                ? <Link to="/">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </Link>
                : <div>
                  <Link to="/login">
                    <button className="btn btn-outline-success" type="submit">
                      Login
                    </button>
                  </Link>
                  <span className="p-2"></span>
                  <Link to="/register">
                    <button className="btn btn-outline-success" type="submit">
                      Register
                    </button>
                  </Link>
                </div>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
