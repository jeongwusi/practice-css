import { useState } from "react";
import styles from "./CardPreview.module.css";
import BlackButton from "../Button/BlackButton/BlackButton";

const PostCssCardPreview = () => {
  const [cardColor, setCardColor] = useState("");

  const handleBlackButton = () => {
    cardColor === "" ? setCardColor("black") : setCardColor("");
  };

  return (
    <article>
      <section className={styles.card} style={{ backgroundColor: cardColor }}>
        <div className={styles.chip} />
      </section>
      <BlackButton onClick={handleBlackButton} />
    </article>
  );
};

export default PostCssCardPreview;
