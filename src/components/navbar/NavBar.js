import React from "react";
import '../../css/navbar.css';
import { NavLink } from "react-router-dom";
import SOSDLogo from '../../css/SOSD.svg'

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  // background: "white",
  textDecoration: "none",
  color: "rgba(0, 115, 181)",
};

export const NavBar = () => {
  return (
    <>
      <div className="navbar-header">
        <img src={SOSDLogo} alt="SOSD logo" width="60" height="70" />
        <h1>Stories of San Diego</h1>
      </div>
      <div className="navbar-links">
        <ul className="nav">
          <li className="navbar__links">
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              color: "rgba(206, 79, 39)",
            }}
          >
            Home
          </NavLink>
          </li>
          <li className="navbar__links">
            <NavLink
              to="/stories"
              exact
              style={link}
              activeStyle={{
                color: "rgba(206, 79, 39)",
              }}
            >
              Stories
            </NavLink>
          </li>
          <li className="navbar__links">
            <NavLink
              to="/about"
              exact
              style={link}
              activeStyle={{
                color: "rgba(206, 79, 39)",
              }}
            >
              About
            </NavLink>
          </li>
          <li className="navbar__links">
            <NavLink
              to="/contact-us"
              exact
              style={link}
              activeStyle={{
                color: "rgba(206, 79, 39)",
              }}
            >
              Contact
            </NavLink>
          </li>
          <li className="navbar__links">
            <NavLink
              to="/admin"
              exact
              style={link}
              activeStyle={{
                color: "rgba(206, 79, 39)",
              }}
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
