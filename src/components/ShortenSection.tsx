import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/shortenSection.module.css";
import ShortenedLink from "./ShortenedLink";

const ShortenSection = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      console.log(response);

      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      alert(e);
    }
  };

  const handleClick = () => {
    fetchData();
    setUserInput("");
    console.log("hello");
  };

  return (
    <div className={`d-xl-flex flex-column`}>
      <div className={`${styles.shortenSection}`}>
        <form action="" className={`${styles.shortenForm}`}>
          <input
            type="text"
            className={`${styles.shortenInput}`}
            placeholder="Shorten a link here..."
            required
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button className={`${styles.shortenButton}`} onClick={handleClick}>
            Shorten it!
          </button>
        </form>
      </div>

      <ShortenedLink link={shortenedLink} />
    </div>
  );
};

export default ShortenSection;
