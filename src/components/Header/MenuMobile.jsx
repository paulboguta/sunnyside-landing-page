import React from "react";
import styled from "styled-components";
import HamburgerMenuButton from "../UI/HamburgerMenuButton";

const MenuMobile = () => {
  return (
    <Wrapper>
      <Triangle />
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Projects</a>
      <HamburgerMenuButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 16rem;
  width: 88vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 5rem;
  right: 1.55rem;

  background-color: var(--white);
  a {
    text-decoration: none;
    color: var(--blue-grayish);
    font-size: 1.1rem;
  }
`;

const Triangle = styled.div`
  border-width: 0 0 2rem 2rem;
  border-style: solid;
  border-color: transparent transparent var(--white) transparent;
  position: fixed;
  right: 1.55rem;
  top: 3.2rem;
`;

export default MenuMobile;
