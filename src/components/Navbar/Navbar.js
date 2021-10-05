import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const activeStyle = {
    color: "#fff",
  };
  return (
    <div className="navbar">
      <Container>
        <div className="container">
          <div className="logo">
            <h2>edureka!</h2>
          </div>
          <div className="nav">
            <ul>
              <li>
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-item"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-item"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-item"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-item"
                  to="/registration"
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
