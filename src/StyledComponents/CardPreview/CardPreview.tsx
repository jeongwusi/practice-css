import { useState } from "react";
import styled from "styled-components";
import BlackButton from "../Button/BlackButton/BlackButton";

type cardColor = {
  cardColor: string;
};

const Card = styled.section<cardColor>`
  display: flex;
  background-color: ${(props) => props.cardColor};
  padding: 0px 12px 4px 12px;
  align-items: center;
  margin: 0 auto 0 auto;
  width: 208px;
  height: 123px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 3px 3px 10px #667085;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  background-color: #cbba64;
  border-radius: 4px;
`;

const StyledComponentsCardPreview = () => {
  const [cardColor, setCardColor] = useState("");

  const handleBlackButton = () => {
    cardColor === "" ? setCardColor("black") : setCardColor("");
  };

  return (
    <article>
      <Card cardColor={cardColor}>
        <Chip />
      </Card>
      <BlackButton onClick={handleBlackButton} />
    </article>
  );
};

export default StyledComponentsCardPreview;
