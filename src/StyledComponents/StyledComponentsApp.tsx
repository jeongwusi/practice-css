import styled from "styled-components";
import StyledComponentsCardPreview from "./CardPreview/CardPreview";

const Container = styled.div`
  margin-top: 20px;
  padding: 30px;
  background-color: white;
  width: 370px;
  height: 750px;
  border-radius: 10px;
`;

const StyledComponentsApp = () => {
  return (
    <Container>
      <StyledComponentsCardPreview />
    </Container>
  );
};

export default StyledComponentsApp;
