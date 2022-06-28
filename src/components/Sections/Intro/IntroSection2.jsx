import React from "react";
import styled from "styled-components";

const IntroSection2 = (props) => {
  return (
    <Wrapper background={props.img}>
      <TextContent>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
      </TextContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const TextContent = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  color: var(--dark-cyan-desaturated);
  text-align: center;
  padding-inline: 1rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-family: var(--font-fraunces);
    margin-bottom: 3rem;
  }

  p {
    font-size: 0.9rem;
    letter-spacing: 1px;
    line-height: 1.3rem;
  }
`;

export default IntroSection2;
