import React from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import Data from "../Intro/Data.json";
import ImgEmily from "../../../images/image-emily.jpg";
import ImgThomas from "../../../images/image-thomas.jpg";
import ImgJennie from "../../../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <Wrapper>
      <h3>Client Testimonials</h3>
      <Testimonial
        img={ImgEmily}
        text={Data.testimonials.testimonial1}
        name="Emily R."
        title="Marketing Director"
      />
      <Testimonial
        img={ImgThomas}
        text={Data.testimonials.testimonial2}
        name="Thomas S."
        title="Chief Operating Officer"
      />
      <Testimonial
        img={ImgJennie}
        text={Data.testimonials.testimonial3}
        name="Jennie F."
        title="Business Owner"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;

  h3 {
    font-size: 1rem;
    color: var(--blue-grayish);
    font-family: var(--font-fraunces);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 3rem;
  }
`;
export default Testimonials;
