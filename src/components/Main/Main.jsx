import React from "react";
import styled from "styled-components";
import Intro from "../Sections/Intro/Intro";
import Testimonials from "../Sections/Testimonials/Testimonials";
import Gallery from "../Sections/Gallery/Gallery";
import Footer from "../Sections/Footer/Footer";

const Main = () => {
  return (
    <Wrapper>
      <Intro />
      <Testimonials />
      <Gallery />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default Main;
