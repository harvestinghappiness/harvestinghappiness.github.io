import * as React from "react";
import styled from "styled-components";
import MissionImage from "../image-components/mission-image";

const MissionContainer = styled.div`
  position: relative;
  height: 88vh;
  min-height: 504px;
  width: 100%;
  overflow: hidden;
`;

const MissionAbsoluteCenter = styled.div`
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

const StatementContainer = styled.div`
    border: solid white 0.2rem;
    height: 110px;
    width: 700px;
    display: flex;
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
  margin-top: 48px;
  color: white;
`;

const Mission = styled.h2`
  font-family: Gothic A1;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 8px;
  color: white;
  margin-bottom: 40px;
`;


const MissionStatement = styled.p`
font-family: Gothic A1;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 39px;
display: flex;
align-items: center;
text-align: center;
width: 624px;
margin-top: 56px;
margin-bottom: 64px;
color: white;
`;

const OurMission = (): JSX.Element => (
    <MissionContainer>
        <MissionImage/>
        <MissionAbsoluteCenter>
        <Our>Our</Our>
        <Mission>MISSION</Mission>
        <StatementContainer>
        <MissionStatement>We strive to maintain a safe location where everyone is welcome to come and find physical, emotional, and spiritual support.</MissionStatement>
        </StatementContainer>
        </MissionAbsoluteCenter>
    </MissionContainer>
);

export default OurMission;