import styles from "./BlackButton.module.css";
import Button from "../Button";

type BlackButtonProps = {
  onClick: () => void;
};

const BlackButton = ({ onClick }: BlackButtonProps) => {
  return (
    <div className={styles.container}>
      <Button type={"submit"} className={""} onClick={onClick}>
        Black Button
      </Button>
    </div>
  );
};

export default BlackButton;
