import React from "react";
import styled from "styled-components";
import LogoImg from "../../../images/logo.svg";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <Wrapper>
      <img src={LogoImg} />
      <Links>
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </Links>
      <Icons>
        <IconContext.Provider value={{ className: "footer-icons" }}>
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <BsPinterest />
        </IconContext.Provider>
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--light-cyan);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 20%;
    height: 20%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    filter: invert(47%) sepia(63%) saturate(271%) hue-rotate(118deg)
      brightness(70%) contrast(95%); // generator: https://codepen.io/sosuke/pen/Pjoqqp
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5rem;

  a {
    color: var(--dark-cyan-moderate);
  }

  margin-bottom: 4rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export default Footer;
