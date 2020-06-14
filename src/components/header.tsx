import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { maxWidth } from "../utils/style-constants";
import Brand from "./Brand";

const StyledHeader = styled.header`
  padding: 0 40px;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 24px 0;
  max-width: ${maxWidth}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav``;
const NavList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
`;
const NavItem = styled.li`
  margin: 0 0 0 32px;
  padding: 0;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

const Header = (): JSX.Element => (
  <StyledHeader>
    <Container>
      <Brand />
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/donate">Donate</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/shop">Shop</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  </StyledHeader>
);

export default Header;
