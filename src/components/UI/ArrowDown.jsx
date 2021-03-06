import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import styled from "styled-components";

const ArrowDown = (props) => {
  let scroll = Scroll.animateScroll;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      !animate ? setAnimate(true) : setAnimate(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [animate]);

  const clickHandler = () => {
    scroll.scrollTo(600);
  };

  return (
    <div className="flex-center">
      <Button onClick={clickHandler}>
        <IconContext.Provider
          value={{
            style: { color: "white", fontSize: "8rem", marginTop: "4rem" },
            className: `${animate ? "animation-bounce-top" : ""}`,
          }}
        >
          <HiOutlineArrowNarrowDown />
        </IconContext.Provider>
      </Button>
    </div>
  );
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 3;
`;

export default ArrowDown;
