import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "../icons/logo";
import { COLORS } from "../utils/style-constants";

const LogoContainer = styled.div`
  margin-right: 16px;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BrandLink = styled(Link)`
  color: ${({ color }: { color: string }): string => color};
  text-decoration: none;
  font-family: "Gothic A1", sans-serif;
  font-size: 28px;
`;

const Brand = ({ color = "black" }: { color?: string }): JSX.Element => (
  <BrandContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <BrandLink color={color} to="/">
      Harvesting Happiness
    </BrandLink>
  </BrandContainer>
);

export default Brand;
