import React from 'react'
import logo from "../images/logo.svg";
import styles from "../styles/navbar.module.css";


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={`navbar-nav ${styles.background}`}>
              <a
                className={`nav-link active text-light pb-3`}
                aria-current="page"
                href="#"
              >
                Features
              </a>
              <a className={`nav-link text-light pb-3`} href="#">
                Pricing
              </a>
              <a className={`nav-link text-light pb-3`} href="#">
                {" "}
                Rescouces
              </a>
              <hr className={`bg-light`}></hr>
              <a className={`nav-link text-light pb-3`} href="#">
                Login
              </a>
              <a href="" className={`nav-link text-light`}>
                <button className={` ${styles.signUpButton}`}>Signup</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar
