import favicon from "/favicon.ico";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <header>
      <div className="logo-container">
        <a href="/">
          <img src={favicon} className="logo" alt="NotePlex Logo" />
        </a>
        <p>NotePlex</p>
      </div>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" className="search" placeholder="Search for notes" />
      </div>

      <div className="log-reg-container">
        <button onClick={goToLogin}>Login</button>
        <button onClick={goToRegister}>Register</button>
      </div>
    </header>
  );
};

export default Header;
