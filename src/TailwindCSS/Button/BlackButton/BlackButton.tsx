import Button from "../Button";

type BlackButtonProps = {
  onClick: () => void;
};

const BlackButton = ({ onClick }: BlackButtonProps) => {
  return (
    <div className="mt-7">
      <Button type={"submit"} className={""} onClick={onClick}>
        Black Button
      </Button>
    </div>
  );
};

export default BlackButton;
