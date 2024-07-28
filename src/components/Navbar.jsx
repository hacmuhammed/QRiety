import React from "react";
import { Logo } from "../assets";
function Navbar() {
  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" />
      {/* <div className="navbar-links">
        <a href="">Home</a>
        <a href="">Discover</a>
        <a href="">Why QRiety?</a>
        <a href="">Get Started</a>
      </div> */}
    </div>
  );
}

export default Navbar;
