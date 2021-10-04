import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/header-logo.png";
import { Container } from "react-bootstrap";

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

/* 

*/

/* 
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";


 <Router>
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as {Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as {Link} to={"/about"}>About</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    <div>
        <Switch>
        <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route exact path="/services">
        <Services></Services>
      </Route>
      <Route exact path="/contact">
        <Contact></Contact>
      </Route>
        </Switch>
    </div>
    </Router>
*/
