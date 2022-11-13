import React from "react";
import illustration from "../images/illustration-working.svg";
import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <div>
      <img src={illustration} alt="" width="100%" className="illustration" />
      <div className={`${styles.headerSection}`}>
        <p className={`fs-1 fw-bolder`}>More than just shorter links</p>
        <p className={`fs-5 fw-normal lh-base`}>
          Build your and's recognition and get etailed insights on how your
          links are performing
        </p>
      </div>

      <button className={` mb-5 ${styles.startedButton} `}>Get Started</button>
    </div>
  );
};

export default Header;
