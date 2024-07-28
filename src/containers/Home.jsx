import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";
function Home() {
  const navigate = useNavigate();
  const hadleCreateClick = () => {
    navigate("/qr-generator");
  };
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-texts animate__animated animate__fadeInLeft">
          <h1 className="home-title ">
            Your One-Stop Solution for{" "}
            <span style={{ color: "#5AC5B1" }}>QR</span> Code Generation
          </h1>
          <p>Create, Customize, and Share QR Codes with Ease.</p>
        </div>
        <button
          onClick={hadleCreateClick}
          className="animate__animated animate__fadeInRight"
        >
          Create Your Own
        </button>
      </div>
    </>
  );
}

export default Home;
