import React from "react";
import styles from "../styles/footer.module.css";
import logo from "../images/logo.svg";
import fb_logo from "../images/icon-facebook.svg";
import twit_logo from "../images/icon-twitter.svg";
import pin_logo from "../images/icon-pinterest.svg";
import ig_logo from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <img src={logo} alt="logo" className={styles.footerLogo} />
        
        <div className={styles.lists}>
          <ul className={styles.list}>
            <p className={`${styles.headings}`}>Features</p>
            <li className={styles.listItem}>Link Shortening</li>
            <li className={styles.listItem}>Branded Links</li>
            <li className={styles.listItem}>Analytics</li>
          </ul>
          <ul className={styles.list}>
            <p className={`${styles.headings}`}>Resources</p>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Developers</li>
            <li className={styles.listItem}>Support</li>
          </ul>
          <ul className={styles.list}>
            <p className={`${styles.headings}`}>Company</p>
            <li className={styles.listItem}>About</li>
            <li className={styles.listItem}>Our Team</li>
            <li className={styles.listItem}>Careers</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.socials}>
          <div className={styles.liSocial}>
            <img src={fb_logo} alt="facebook" />
          </div>
          <div className={styles.liSocial}>
            <img src={twit_logo} alt="twitter" />
          </div>
          <div className={styles.liSocial}>
            <img src={pin_logo} alt="pinterest" />
          </div>
          <div className={styles.liSocial}>
            <img src={ig_logo} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
