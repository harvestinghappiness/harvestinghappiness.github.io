import * as React from "react";
import styled from "styled-components";
import ProgramsImage from "../image-components/programs-image";

const ProgramsContainer = styled.div`
  position: relative;
  height: 64vh;
  min-height: 64px;
  width: 100%;
  overflow: hidden;
`;

const ProgramsImageContainer = styled.div`
position: relative;
`;

const ProgramsAbsoluteCenter = styled.div`
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

const Lighten = styled(ProgramsAbsoluteCenter)`
  background-color: rgb(255, 255, 255);
  opacity: 0.84;
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
  color: rgb(32, 32, 32);
`;

const Programs = styled.h2`
  font-family: Gothic A1;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 8px;
  color: rgb(32, 32, 32);
  margin-bottom: 40px;
`;

const OurPrograms = (): JSX.Element => (
    <ProgramsContainer>
      <ProgramsImageContainer>
      <ProgramsImage />
      </ProgramsImageContainer>
      <Lighten />
      <ProgramsAbsoluteCenter>
        <Our>Our</Our>
        <Programs>PROGRAMS</Programs>
      </ProgramsAbsoluteCenter>
    </ProgramsContainer>
);

export default OurPrograms;