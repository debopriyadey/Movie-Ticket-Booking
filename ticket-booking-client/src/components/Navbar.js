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
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg"
        style={{
          borderRadius: "10px",
          backgroundColor: "#1f1f1f5c",
          color: "#fff"
        }}
      >
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            <h4 style={{ color: "#fff", marginBottom: "5px" }}>Movie Cafe</h4>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/movies" class="nav-link active">
                  <p style={{ color: "#fff", marginBottom: "0px" }}>Movies</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/tickets" class="nav-link active">
                  <p style={{ color: "#fff", marginBottom: "0px" }}>
                    {role == 'admin' ? "View Bookings" : "Book Ticket"}
                  </p>
                </Link>
              </li>
              {user.role == "admin" &&
                <li class="nav-item">
                  <Link to="/movielist" class="nav-link active">
                    <p style={{ color: "#fff", marginBottom: "0px" }}>
                      Movie List
                    </p>
                  </Link>
                </li>}
            </ul>
            <form class="d-flex" role="search">
              {user.role
                ? <Link to="/">
                  <button
                    class="btn btn-outline-success"
                    type="submit"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </Link>
                : <div>
                  <Link to="/login">
                    <button class="btn btn-outline-success" type="submit">
                      Login
                    </button>
                  </Link>
                  <span className="p-2"></span>
                  <Link to="/register">
                    <button class="btn btn-outline-success" type="submit">
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
