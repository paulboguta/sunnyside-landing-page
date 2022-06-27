import React from "react";
import styled from "styled-components";
import BackgroundHeader from "../../images/mobile/image-header.jpg";
import Nav from "./Nav";
import ArrowDown from "../UI/ArrowDown";

const Header = () => {
  return (
    <Wrapper>
      <header>
        <Nav />
      </header>
      <Heading>We are Creatives</Heading>
      <ArrowDown />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackgroundHeader});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Heading = styled.h1`
  color: var(--white);
  font-family: var(--font-fraunces);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 3.2rem;
  margin-top: 4rem;
`;

export default Header;
