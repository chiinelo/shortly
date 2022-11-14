import React from "react";
import styles from "../styles/cardSection.module.css";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const CardsSection = () => {
  return (
    <div className={`${styles.cardSection}`}>
      <div className={`mt-3 p-5`}>
        <p className={`fs-2 fw-bold `}>Advances Statistics</p>
        <p className={`${styles.advanceBodyText}`}>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className={`${styles.cards}`}>
        <div className={`card ${styles.brandedCard}`}>
          <img
            src={brand}
            alt="brandLogo"
            className={`${styles.icons}`}
            width="100%"
          />
          <div className={`card-body`}>
            <h5 className={`card-title fw-bold `}>Brand Recognition</h5>
            <p className={`card-text lh-base`}>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className={`${styles.bgLine}`}></div>

        <div className={`card ${styles.brandedCard}`}>
          <img
            src={detailed}
            alt="detailedLogo"
            className={`${styles.icons}`}
            width="100%"
          />
          <div className={`card-body`}>
            <h5 className={`card-title fw-bold`}>Detailed Reecords</h5>
            <p className={`card-text lh-base`}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className={`${styles.bgLine}`}></div>

        <div className={`card ${styles.brandedCard}`}>
          <img
            src={customizable}
            alt="customLogo"
            className={`${styles.icons}`}
            width="100%"
          />
          <div className={`card-body`}>
            <h5 className={`card-title fw-bold`}>Fully Customizable</h5>
            <p className={`card-text lh-base`}>
              Improve brand awareness and content discoverability through
              customizable links supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
