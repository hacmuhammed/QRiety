import React from "react";
import { Home, Creator } from "./containers";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Creator />} path="/qr-generator" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
