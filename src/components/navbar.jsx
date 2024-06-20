import React from 'react';
import "./navbar.css";
import "./footer.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </footer>
  );
}

export { Navbar, Footer };