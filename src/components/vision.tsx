import * as React from "react";
import styled from "styled-components";
import VisionImage from "../image-components/vision-image";

const VisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 112px;
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
  margin-top: 146px;
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
  margin-top: 8px;
`;

const VisionStatement = styled.p`
font-family: Gothic A1;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 39px;
display: flex;
align-items: center;
text-align: center;
width: 650px;
margin-top: 24px;
margin-bottom: 64px;
`;

const VisionImageContainer = styled.div`
  height: 195px;
  width: 195px;
  max-width: 192px;
`;

const OurVision = (): JSX.Element => (
  <VisionContainer>
    <Our>Our</Our>
    <Vision>VISION</Vision>
    <VisionStatement>
        To walk alongside the sick, the elderly, 
        the abandoned, and the hopeless by providing genuine support, 
        and physical aide. Regardless of gender, religion, level of education, 
        job, or past experiences.
    </VisionStatement>
    <VisionImageContainer>
      <VisionImage />
    </VisionImageContainer>
  </VisionContainer>
);

export default OurVision;
