import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TravL <i class="fas fa-plane-departure"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
