import React from "react";
import { Logo } from "../assets";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <img onClick={handleLogoClick} src={Logo} alt="logo" />
    </div>
  );
}

export default Navbar;
