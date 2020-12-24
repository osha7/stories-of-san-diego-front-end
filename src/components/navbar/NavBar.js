import React from "react";
import '../../css/navbar.css';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

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

    </>
  );
};
