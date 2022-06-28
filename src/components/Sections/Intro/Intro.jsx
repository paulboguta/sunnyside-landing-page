import React from "react";
import styled from "styled-components";
import ImgTransformDesktop from "../../../images/desktop/image-transform.jpg";
import ImgStandOutDesktop from "../../../images/desktop/image-stand-out.jpg";
import ImgPhotographyDesktop from "../../../images/desktop/image-photography.jpg";
import ImgGraphicDesignDesktop from "../../../images/desktop/image-graphic-design.jpg";
import IntroSection1 from "./IntroSection1";
import IntroSection2 from "./IntroSection2";
import Data from "./Data.json";
import IntroMobile from "./IntroMobile";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="mediaqueries-desktop">
        <IntroSection1
          img={ImgTransformDesktop}
          alt="Egg on yellow background"
          header="Transform your brand"
          description={Data.descriptions.description1}
          direction="row-reverse"
        />
        <IntroSection1
          img={ImgStandOutDesktop}
          alt="Mat pinkish glass on pink background"
          header="Stand out to the right audience"
          description={Data.descriptions.description2}
          direction="row"
        />
        <Wrapper>
          <IntroSection2
            img={ImgGraphicDesignDesktop}
            header="Graphic Design"
            description={Data.descriptions.description3}
          />
          <IntroSection2
            img={ImgPhotographyDesktop}
            header="Photography"
            description={Data.descriptions.description4}
          />
        </Wrapper>
      </div>
      <IntroMobile />
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Intro;
