import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../styles/shortenedLinks.module.css";



interface ShortLink {
  link: string
}

const ShortenedLink = (props:ShortLink) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);

  // setShortenLink(props.link)
  useEffect(() => {
    if (props.link !== "") {
       setShortenLink(props.link)
     }
   }, [props.link]);
  console.log(props.link);
  
  const linkCopied = () => {
    return copied ? "copied" : "";
  };

  useEffect(() => {}, [copied]);
  return (
    <div className={`${styles.shotenedLinks}`}>
      <input
        type="text"
        className={`${styles.shortenedInput}`}
        value={shortenLink}
        onChange={(e) => setShortenLink(e.target.value)}
      />
      <CopyToClipboard
        text={shortenLink}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <input
          type="submit"
          className={`${styles.shortenedBtn}`}
          value="Copy"
          style={{
            backgroundColor: copied ? "grey" : "hsl(180, 66%, 49%)",
          }}
          onClick={linkCopied}
        />
      </CopyToClipboard>
    </div>
  );
};

export default ShortenedLink;
