import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navabar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const onMobileClick = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRAVL<i className="fas fa-plane-departure"></i>
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
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navabar;
