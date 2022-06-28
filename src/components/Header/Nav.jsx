import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo.svg";
import ContactButton from "../UI/ContactButton";
import HamburgerButton from "../UI/HamburgerButton";
import MenuMobile from "./MenuMobile";

const Nav = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const clickHamburgerHandler = () => {
    !hamburgerClicked ? setHamburgerClicked(true) : setHamburgerClicked(false);
  };

  return (
    <React.Fragment>
      <div className="mediaqueries-mobile">
        <NavbarMobile>
          <LogoMobile src={LogoImg} />
          <HamburgerButton onClick={clickHamburgerHandler} />
          {hamburgerClicked ? <MenuMobile /> : null}
        </NavbarMobile>
      </div>
      <div className="mediaqueries-desktop">
        <Navbar>
          <Logo src={LogoImg} />
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <ContactButton color="var(--white)" hover="yellow" />
        </Navbar>
      </div>
    </React.Fragment>
  );
};

const LogoMobile = styled.img`
  padding: 1.5rem;
`;

const Logo = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
`;

const NavbarMobile = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4.2rem;
  gap: 3rem;
  margin-right: 3rem;

  a {
    text-decoration: none;
    color: var(--white);
  }

  a:hover {
    transition: 0.3s ease-in;
    color: var(--dark-blue);
    cursor: pointer;
  }
`;

export default Nav;
