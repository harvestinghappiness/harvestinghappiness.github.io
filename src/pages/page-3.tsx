// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = (props: PageProps): JSX.Element => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
