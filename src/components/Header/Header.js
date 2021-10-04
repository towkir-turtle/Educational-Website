import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>edureka!</h2>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink className="nav-item" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="registration">
                Registration
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
