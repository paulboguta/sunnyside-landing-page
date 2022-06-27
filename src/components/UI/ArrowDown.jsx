import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import styled from "styled-components";

const ArrowDown = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      !animate ? setAnimate(true) : setAnimate(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [animate]);

  return (
    <div className="flex-center">
      <IconContext.Provider
        value={{
          style: { color: "white", fontSize: "8rem", marginTop: "4rem" },
          className: `${animate ? "animation-bounce-top" : ""}`,
        }}
      >
        <HiOutlineArrowNarrowDown />
      </IconContext.Provider>
    </div>
  );
};

export default ArrowDown;
