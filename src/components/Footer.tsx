import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/style-constants";
import Brand from "./Brand";
import InstagramLogo from "../icons/instagram";
import FacebookLogoUnstyled from "../icons/facebook";

const FooterContainer = styled.footer`
  background-color: ${COLORS.bodyDark};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const ContactH3 = styled.h3`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const SocialContainer = styled.div`
  margin-bottom: 16px;
`;

const FacebookLogo = styled(FacebookLogoUnstyled)`
  margin-right: 32px;
`;

const BrandDescription = styled.p`
  max-width: 352px;
  text-align: center;
  font-weight: 300;
  line-height: 24px;
`;

const Footer = (): JSX.Element => (
  <FooterContainer>
    <ContactH3>Contact Us</ContactH3>
    <SocialContainer>
      <a href="https://facebook.com/harvestinghappinessguate" target="blank">
        <FacebookLogo />
      </a>
      <a href="https://instagram.com/harvestinghappinessguate" target="blank">
        <InstagramLogo />
      </a>
    </SocialContainer>
    <Brand color="white" />
    <BrandDescription>
      Cosechando Felicidad Inc. is a 501(c)3 nonprofit working in Guatemala
    </BrandDescription>
  </FooterContainer>
);

export default Footer;
