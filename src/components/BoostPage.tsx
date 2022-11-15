import React from "react";
import styles from "../styles/boostPage.module.css"

const BoostPage = () => {
  return (
    <div>
      <div className={`${styles.boostLinks}`}>
        <p className={`text-light fs-1 fw-bolder`}>Boost your links today</p>
        <button className={`${styles.startedButton} mb-5`}>Get Started</button>
      </div>
    </div>
  );
};

export default BoostPage;
