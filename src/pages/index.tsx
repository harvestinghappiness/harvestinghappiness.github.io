import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../image-components/image";
import SEO from "../components/seo";
import styled from "styled-components";
import HeroImage from "../image-components/hero-image";
import { COLORS, getButtonStyle } from "../utils/style-constants";

const Hero = styled.div`
  position: relative;
  height: 50vh;
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
`;

const Button = styled.a`
  ${getButtonStyle()}
`;

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <HeroImage />
      <Darken />
      <AbsoluteCenter>
        <HeroPhrase>
          Creating a community where those in most need can receive holistic
          aide as we strive to be the hands and feet of Jesus
        </HeroPhrase>
        <Button href="#programs">Learn More</Button>
      </AbsoluteCenter>
    </Hero>
    <h1>Hi people</h1>
    <p id="programs">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
