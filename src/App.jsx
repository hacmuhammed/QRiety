import React from "react";
import { Home, Creator } from "./containers";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorPrimary: "#8F5CFC",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Creator />} path="/qr-generator" />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
