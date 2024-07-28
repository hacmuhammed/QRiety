import React from "react";
import { Logo } from "../assets";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleLogoClick = ()=>{
    navigate('/');
  }
  return (
    <div className="navbar-container">
      <img onClick={handleLogoClick} src={Logo} alt="logo" />
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
