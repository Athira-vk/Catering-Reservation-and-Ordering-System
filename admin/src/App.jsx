import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Home from "./components/Home/Home";

const App = () => {
  const url = "http://localhost:4000";
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState("");

  return (
    <div>
      <ToastContainer />
      {showLogin ? (
        <LoginPopup url={url} setShowLogin={setShowLogin} setToken={setToken} />
      ) : (
        <></>
      )}
      <Navbar token={token} setToken={setToken} setShowLogin={setShowLogin} />
      <hr />
      <div className="app-content">
        {!token ? (
          <Home />
        ) : (
          <>
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
            </Routes>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
