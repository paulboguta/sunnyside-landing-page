import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo.svg";
import HamburgerButton from "../UI/HamburgerButton";

const Nav = () => {
  return (
    <Navbar>
      <Logo src={LogoImg} />
      <HamburgerButton />
    </Navbar>
  );
};

const Logo = styled.img`
  padding: 1.5rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default Nav;
