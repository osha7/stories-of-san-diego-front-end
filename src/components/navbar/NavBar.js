import React from "react";
import "../../css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import SOSDLogo from "../../css/SSD-full-01.svg";
import TextUsContainer from "../text-us/modal/TextUsContainer"

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    // background: "white",
    textDecoration: "none",
    color: "rgba(0, 115, 181)",
};

export const NavBar = () => {
    const textUsTriggerText = "Text Us Your Story";

    return (
        <>
            <div className="navbar-header">
                <Link to="/">
                    <img src={SOSDLogo} alt="SOSD logo" width="300" />
                </Link>
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
                            to="/news"
                            exact
                            style={link}
                            activeStyle={{
                                color: "rgba(206, 79, 39)",
                            }}
                        >
                            &nbsp;&nbsp;News
                        </NavLink>
                    </li>
                    <li className="navbar__links">
                        <NavLink to="/search" exact style={link}>
                            <ion-icon name="search-outline"></ion-icon>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="subtext-button">
                <TextUsContainer
                    textUsTriggerText={textUsTriggerText}
                />
            </div>
        </>
    );
};
