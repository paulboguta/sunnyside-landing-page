import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo.svg";
import HamburgerButton from "../UI/HamburgerButton";
import MenuMobile from "./MenuMobile";

const Nav = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const clickHamburgerHandler = () => {
    !hamburgerClicked ? setHamburgerClicked(true) : setHamburgerClicked(false);
  };

  return (
    <Navbar>
      <Logo src={LogoImg} />
      <HamburgerButton onClick={clickHamburgerHandler} />
      {hamburgerClicked ? <MenuMobile /> : null}
    </Navbar>
  );
};

const Logo = styled.img`
  padding: 1.5rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export default Nav;
