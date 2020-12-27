import React from "react";
import '../../css/navbar.css';
import { NavLink } from "react-router-dom";

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
        <h1>Stories of San Diego</h1>
      </div>
      <div className="navbar-links">
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

        <NavLink
          to="/contact-us"
          exact
          style={link}
          activeStyle={{
            color: "rgba(206, 79, 39)",
          }}
        >
          Contact Us
        </NavLink>

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

      </div>
    </>
  );
};
