import React from "react";
import styled from "styled-components";
import ImgTransform from "../../../images/mobile/image-transform.jpg";
import ImgStandOut from "../../../images/mobile/image-stand-out.jpg";
import ImgPhotography from "../../../images/mobile/image-photography.jpg";
import ImgGraphicDesign from "../../../images/mobile/image-graphic-design.jpg";
import IntroSection1 from "./IntroSection1";
import IntroSection2 from "./IntroSection2";
import Data from "./Data.json";

const Intro = () => {
  return (
    <div>
      <IntroSection1
        img={ImgTransform}
        alt="Egg on yellow background"
        header="Transform your brand"
        description={Data.descriptions.description1}
      />
      <IntroSection1
        img={ImgStandOut}
        alt="Mat pinkish glass on pink background"
        header="Stand out to the right audience"
        description={Data.descriptions.description2}
      />
      <IntroSection2
        img={ImgGraphicDesign}
        header="Graphic Design"
        description={Data.descriptions.description3}
      />
      <IntroSection2
        img={ImgPhotography}
        header="Photography"
        description={Data.descriptions.description4}
      />
    </div>
  );
};

export default Intro;
