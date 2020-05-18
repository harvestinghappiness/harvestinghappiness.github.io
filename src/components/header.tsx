import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { maxWidth } from "../utils/style-constants";
import Logo from "./logo";

const StyledHeader = styled.header`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth}px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props): JSX.Element => (
  <StyledHeader>
    <Container>
      <Logo />
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Container>
  </StyledHeader>
);

export default Header;
