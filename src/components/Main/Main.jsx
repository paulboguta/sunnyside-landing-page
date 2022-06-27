import React from "react";
import styled from "styled-components";
import Intro from "../Sections/Intro/Intro";

const Main = () => {
  return (
    <Wrapper>
      <Intro />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default Main;
