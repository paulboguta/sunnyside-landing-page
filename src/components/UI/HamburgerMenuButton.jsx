import React from "react";
import styled from "styled-components";

const HamburgerMenuButton = () => {
  return <Button>Contact</Button>;
};

const Button = styled.button`
  background-color: var(--yellow);
  border: none;
  height: 3rem;
  width: 8rem;
  border-radius: 1.4rem;
  color: var(--very-dark-blue);
  font-family: var(--font-fraunces);
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export default HamburgerMenuButton;
