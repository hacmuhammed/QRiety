import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";
function Home() {
  const navigate = useNavigate();
  const [fadeOutClass, setFadeOutClass] = useState("");
  const hadleCreateClick = () => {
    setFadeOutClass("animate__fadeOutLeft");
    setTimeout(() => {
      navigate("/qr-generator");
    }, 300);
  };
  return (
    <>
      <Navbar />
      <div
        className={`home-container animate__animated animate__fadeInLeft ${fadeOutClass}`}
      >
        <div className={`home-texts animate__animated  `}>
          <h1 className="home-title ">
            Your One-Stop Solution for{" "}
            <span style={{ color: "var(--color-primary)" }}>QR</span> Code Generation
          </h1>
          <p>Create, Customize and Share QR Codes with Ease.</p>
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
