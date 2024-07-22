import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">ScriptSanctuary</h1>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Book Club</a>
            </li>
            <li>
              <a href="#">Community Reads</a>
            </li>
            <li>
              <a href="#">Challenges</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
