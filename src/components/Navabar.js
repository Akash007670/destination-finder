import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navabar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onMobileClick = () => setClick(false);

  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TravL <i class="fas fa-plane-departure"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars "} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={"nav-item"}>
              <Link to="/" className={"nav-links"} onClick={onMobileClick}>
                Home
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link
                to="/services"
                className={"nav-links"}
                onClick={onMobileClick}
              >
                Services
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link
                to="/products"
                className={"nav-links"}
                onClick={onMobileClick}
              >
                Products
              </Link>
            </li>
            <li className={"nav-item"}>
              <Link
                to="/"
                className={"nav-links-mobile"}
                onClick={onMobileClick}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
