import styled from "styled-components";
import Button from "../Button";

type BlackButtonProps = {
  onClick: () => void;
};

const Container = styled.div`
  margin-top: 30px;
`;

const BlackButton = ({ onClick }: BlackButtonProps) => {
  return (
    <Container>
      <Button type={"submit"} className={""} onClick={onClick}>
        Black Button
      </Button>
    </Container>
  );
};

export default BlackButton;
