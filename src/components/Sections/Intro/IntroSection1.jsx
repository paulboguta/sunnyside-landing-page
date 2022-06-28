import React from "react";
import styled from "styled-components";

const IntroSection = (props) => {
  return (
    <Wrapper direction={props.direction}>
      <img src={props.img} alt={props.alt} />
      <TextContent>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
        <a href="#">Learn More</a>
      </TextContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: ${(props) => props.direction};
    justify-content: flex-start;
    width: 100%;

    img {
      height: 50%;
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: space-evenly;
  padding-inline: 1.5rem;

  h1 {
    font-size: 2.4em;
  }

  h1,
  a {
    font-family: var(--font-fraunces);
    color: var(--very-dark-blue);
  }

  p {
    color: var(--blue-grayish);
    font-weight: 400;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    padding: 5rem;
    padding-inline: 8rem;
  }
`;

export default IntroSection;
