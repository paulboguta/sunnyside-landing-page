import React from "react";
import styled from "styled-components";

const Testimonial = (props) => {
  return (
    <Wrapper>
      <img src={props.img} />
      <p>{props.text}</p>
      <h2>{props.name}</h2>
      <h4>{props.title}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;

  img {
    border-radius: 50%;
    height: 5rem;
    margin-bottom: 2rem;
  }

  p {
    color: var(--very-dark-blue-grayish);
    margin-bottom: 2rem;
    padding-inline: 3rem;
  }

  h2 {
    font-size: 1rem;
    font-family: var(--font-fraunces);
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 0.8rem;
    color: var(--blue-grayish);
  }
`;

export default Testimonial;
