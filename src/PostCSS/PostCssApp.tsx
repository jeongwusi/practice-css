import styles from "./PostCssApp.module.css";
import CardPreview from "./CardPreview/CardPreview";

const PostCssApp = () => {
  return (
    <div className={styles.container}>
      <CardPreview />
    </div>
  );
};

export default PostCssApp;
