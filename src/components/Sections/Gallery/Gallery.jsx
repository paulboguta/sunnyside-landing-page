import React from "react";
import styled from "styled-components";
import GalleryOrangeMobile from "../../../images/mobile/image-gallery-orange.jpg";
import GalleryMilkMobile from "../../../images/mobile/image-gallery-milkbottles.jpg";
import GalleryConeMobile from "../../../images/mobile/image-gallery-cone.jpg";
import GallerySugarMobile from "../../../images/mobile/image-gallery-sugar-cubes.jpg";
import GalleryOrangeDesktop from "../../../images/desktop/image-gallery-orange.jpg";
import GalleryMilkDesktop from "../../../images/desktop/image-gallery-milkbottles.jpg";
import GalleryConeDesktop from "../../../images/desktop/image-gallery-cone.jpg";
import GallerySugarDesktop from "../../../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <React.Fragment>
      <WrapperMobile>
        <img src={GalleryMilkMobile} />
        <img src={GalleryOrangeMobile} />
        <img src={GalleryConeMobile} />
        <img src={GallerySugarMobile} />
      </WrapperMobile>
      <WrapperDesktop>
        <img src={GalleryMilkDesktop} />
        <img src={GalleryOrangeDesktop} />
        <img src={GalleryConeDesktop} />
        <img src={GallerySugarDesktop} />
      </WrapperDesktop>
    </React.Fragment>
  );
};

const WrapperMobile = styled.div`
  margin-top: 140px;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  img {
    width: 50vw;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const WrapperDesktop = styled.div`
  margin-top: 140px;
  width: 100vw;
  display: flex;

  img {
    width: 25vw;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Gallery;
