import React from "react";
import "./Nav.css";

const Nav = () => {
    return(
        <div className="nav">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="links">
                <a>HOME</a>
                <a>ABOUT</a>
                <a>CONTACT</a>
                <a>TESTIMONAL</a>
            </div>
        </div>
    );
} 

export default Nav;