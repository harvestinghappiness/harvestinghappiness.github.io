import * as React from "react";
import styled from "styled-components";
import VisionImage from "../image-components/vision-image";

const VisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Our = styled.h3`
  font-family: Gothic A1;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Vision = styled.h2`
  font-family: Gothic A1;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const VisionImageContainer = styled.div`
  height: 200px;
  width: 200px;
  max-width: 192px;
`;

const OurVision = (): JSX.Element => (
  <VisionContainer>
    <Our>Our</Our>
    <Vision>VISION</Vision>
    <VisionImageContainer>
      <VisionImage />
    </VisionImageContainer>
  </VisionContainer>
);

export default OurVision;
