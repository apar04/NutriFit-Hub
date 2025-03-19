import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const handleNavLinkClick = () => {
    const nav = document.getElementById("navbarNav");
    if (nav.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(nav, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow px-3"
      style={{
        background: "linear-gradient(to right, #1976d2, #00bcd4)", // Blue-teal gradient
        padding: "15px 0",
        width: "100%",
      }}
     
    >
      <div
        className="container-fluid"
        style={{
          margin: "0",
          padding: "0 30px",
        }}
      >
        {/* Logo */}
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Nutri<span style={{ color: "#FFC107" }}>Fit</span>-Hub 🍏
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler rounded-circle"
          style={{ backgroundColor: "#fff" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontSize: "18px" }} to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontSize: "18px" }} to="/about" onClick={handleNavLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontSize: "18px" }} to="/dashboard" onClick={handleNavLinkClick}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontSize: "18px" }} to="/services" onClick={handleNavLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontSize: "18px" }} to="/contact" onClick={handleNavLinkClick}>
                Contact
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
