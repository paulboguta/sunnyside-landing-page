import React from "react";
import styled from "styled-components";
import GalleryOrangeMobile from "../../../images/mobile/image-gallery-orange.jpg";
import GalleryMilkMobile from "../../../images/mobile/image-gallery-milkbottles.jpg";
import GalleryConeMobile from "../../../images/mobile/image-gallery-cone.jpg";
import GallerySugarMobile from "../../../images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <Wrapper>
      <img src={GalleryMilkMobile} />
      <img src={GalleryOrangeMobile} />
      <img src={GalleryConeMobile} />
      <img src={GallerySugarMobile} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 140px;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  img {
    width: 50vw;
  }
`;

export default Gallery;
