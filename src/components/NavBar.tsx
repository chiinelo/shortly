import React from "react";
import logo from "../images/logo.svg";
import styles from "../styles/navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    // <div className={``}>
    //   <nav
    //     className={`navbar navbar-expand-lg navbar-light ${styles.entireSection}`}
    //   >
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         <img src={logo} alt="logo" />
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNavAltMarkup"
    //         aria-controls="navbarNavAltMarkup"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div
    //         className={`collapse navbar-collapse ${styles.navTexts}`}
    //         id="navbarNavAltMarkup"
    //       >
    //         <div className={`navbar-nav ${styles.background}`}>
    //           <a
    //             className={`nav-link active text-sm-light pb-3`}
    //             aria-current="page"
    //             href="#"
    //           >
    //             Features
    //           </a>
    //           <a className={`nav-link text-sm-light pb-3`} href="#">
    //             Pricing
    //           </a>
    //           <a className={`nav-link text-sm-light pb-3`} href="#">
    //             {" "}
    //             Rescouces
    //           </a>
    //           <hr className={`bg-light`}></hr>
    //           <a className={`nav-link text-sm-light pb-3`} href="#">
    //             Login
    //           </a>
    //           <a href="" className={`nav-link text-sm-light`}>
    //             <button className={` ${styles.signUpButton}`}>Sign up</button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <Navbar
      bg="transparent"
      expand="lg"
      className={`d-xl-flex ${styles.wholeNav}`}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className={`${styles.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav justify-content-lg-inherit"
          className={`${styles.background}`}
        >
          <Nav className={``}>
            <Container className={`${styles.firstDiv}`}>
              <Nav.Link href="#home" className={`${styles.navTexts}`}>
                Features
              </Nav.Link>
              <Nav.Link href="#link" className={`${styles.navTexts}`}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#link" className={`${styles.navTexts}`}>
                Rescouces
              </Nav.Link>
            </Container>
          </Nav>
          <hr className={`bg-light`}></hr>
          <div className={`${styles.secondDiv}`}>
            <Nav.Link href="#link" className={`${styles.navTexts}`}>
              Login
            </Nav.Link>
            <Nav.Link href="#link">
              <button className={` ${styles.signUpButton}`}>Sign up</button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
