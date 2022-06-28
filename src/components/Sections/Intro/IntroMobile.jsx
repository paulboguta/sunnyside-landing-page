import React from "react";
import styled from "styled-components";
import ImgTransformMobile from "../../../images/mobile/image-transform.jpg";
import ImgStandOutMobile from "../../../images/mobile/image-stand-out.jpg";
import ImgPhotographyMobile from "../../../images/mobile/image-photography.jpg";
import ImgGraphicDesignMobile from "../../../images/mobile/image-graphic-design.jpg";
import IntroSection1 from "./IntroSection1";
import IntroSection2 from "./IntroSection2";
import Data from "./Data.json";

const IntroMobile = () => {
  return (
    <div className="mediaqueries-mobile">
      <IntroSection1
        img={ImgTransformMobile}
        alt="Egg on yellow background"
        header="Transform your brand"
        description={Data.descriptions.description1}
        direction="row-reverse"
      />
      <IntroSection1
        img={ImgStandOutMobile}
        alt="Mat pinkish glass on pink background"
        header="Stand out to the right audience"
        description={Data.descriptions.description2}
        direction="row"
      />
      <Wrapper>
        <IntroSection2
          img={ImgGraphicDesignMobile}
          header="Graphic Design"
          description={Data.descriptions.description3}
        />
        <IntroSection2
          img={ImgPhotographyMobile}
          header="Photography"
          description={Data.descriptions.description4}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IntroMobile;
