import React from 'react'
import styles from "../styles/shortenSection.module.css"

const ShortenSection = () => {
  return (
    <div>
      <div className={`${styles.shortenSection}`}>
        <form action="/App" className={`${styles.shortenForm}`}>
          <input
            type="text"
            className={`${styles.shortenInput}`}
            placeholder="Shorten a link here..."
          />
          <button className={`${styles.shortenButton}`}>Shorten it!</button>
        </form>
      </div>
    </div>
  );
}

export default ShortenSection
