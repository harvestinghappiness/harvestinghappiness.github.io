import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../image-components/image";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import OurVision from "../components/vision";


const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <OurVision />
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
