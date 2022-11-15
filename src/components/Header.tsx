import React from "react";
import illustration from "../images/illustration-working.svg";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.imgTextWrap}`}>
        <div className={`${styles.imageSection}`}>
          <img
            src={illustration}
            alt=""
            width="100%"
            className="illustration"
          />
        </div>

        <div className={`${styles.headerSection}`}>
          <p className={`fw-bolder ${styles.headerText}`}>
            More than just shorter links
          </p>
          <p className={`fw-normal lh-base ${styles.headerSubText}`}>
            Build your and's recognition and get etailed insights on how your
            links are performing
          </p>
          <button
            className={`d-lg-flex justify-content-lg-center mb-5 ${styles.startedButton} `}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
