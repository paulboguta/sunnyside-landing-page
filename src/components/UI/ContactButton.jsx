import React from "react";
import styled from "styled-components";

const ContactButton = (props) => {
  return (
    <Button color={props.color} hover={props.hover}>
      Contact
    </Button>
  );
};

const Button = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  height: 3rem;
  width: 8rem;
  border-radius: 1.4rem;
  color: var(--very-dark-blue);
  font-family: var(--font-fraunces);
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: 0.5s ease-in;
    background-color: ${(props) => props.hover};
  }
`;

export default ContactButton;
