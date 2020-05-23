import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./logo";

const LogoContainer = styled.div`
  margin-right: 16px;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BrandLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: "Gothic A1", sans-serif;
  font-size: 28px;
`;

const Brand = (): JSX.Element => (
  <BrandContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <BrandLink to="/">Harvesting Happiness</BrandLink>
  </BrandContainer>
);

export default Brand;
