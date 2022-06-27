import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const HamburgerButton = (props) => {
  return (
    <ButtonHamburger onClick={props.onClick}>
      <IconContext.Provider value={{ style: { fontSize: "1.6rem" } }}>
        <GiHamburgerMenu />
      </IconContext.Provider>
    </ButtonHamburger>
  );
};

const ButtonHamburger = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin-right: 1.5rem;

  & :last-child {
    cursor: pointer;
  }
`;

export default HamburgerButton;
