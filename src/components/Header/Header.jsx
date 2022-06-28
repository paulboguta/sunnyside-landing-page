import React from "react";
import styled from "styled-components";
import BackgroundHeaderMobile from "../../images/mobile/image-header.jpg";
import BackgroundHeader from "../../images/desktop/image-header.jpg";
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
  height: 60vh;
  width: 100%;
  background-image: url(${BackgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundHeaderMobile});
  }
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
