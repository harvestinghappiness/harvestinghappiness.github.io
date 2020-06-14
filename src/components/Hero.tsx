import styled from "styled-components";

import { COLORS, getButtonStyle } from "../utils/style-constants";

import HeroImage from "../image-components/hero-image";
import React from "react";

const HeroContainer = styled.div`
  position: relative;
  height: 80vh;
  min-height: 504px;
  width: 100%;
  overflow: hidden;
`;

const AbsoluteCenter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Darken = styled(AbsoluteCenter)`
  background-color: ${COLORS.bodyDark};
  opacity: 0.55;
`;
const HeroPhrase = styled.h2`
  text-align: center;
  max-width: 992px;
  color: white;
  font-size: 48px;
  line-height: 80px;
  font-weight: 800;
  padding-bottom: 32px;
  margin-top: 48px;
`;

const Button = styled.a`
  ${getButtonStyle()}
`;

const Hero = (): JSX.Element => (
  <HeroContainer>
    <HeroImage />
    <Darken />
    <AbsoluteCenter>
      <HeroPhrase>
        Creating a community where those in most need can receive holistic aide
        as we strive to be the hands and feet of Jesus
      </HeroPhrase>
      <Button href="#programs">Learn More</Button>
    </AbsoluteCenter>
  </HeroContainer>
);

export default Hero;
