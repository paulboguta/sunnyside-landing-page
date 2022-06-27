import React from "react";
import styled from "styled-components";

const IntroSection2 = (props) => {
  return (
    <Wrapper>
      <Background>
        <TextContent>
          <h1>{props.header}</h1>
          <p>{props.description}</p>
          <a href="#">Learn More</a>
        </TextContent>
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
`;

const TextContent = styled.div``;

export default IntroSection2;
