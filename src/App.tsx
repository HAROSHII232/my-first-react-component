import React from "react";
import "./App.css";
import styled from "styled-components";
import { LinkButton, SaveButton } from "./components/Button.styled";
import { Text } from "./components/Text.styled";
import { Title } from "./components/Tittle.styled";
import { Image } from "./components/Image.styled";

function App() {
  return (
    <div className="App">
      <Card>
        <Image />
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Text>
        <ButtonsWrapper>
          <LinkButton as={"a"} href={"#"}>
            See more
          </LinkButton>
          <SaveButton>Save</SaveButton>
        </ButtonsWrapper>
      </Card>
    </div>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  height: 350px;
  padding: 10px 10px 22px;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export default App;
