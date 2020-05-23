import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = (props: PageProps): JSX.Element => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Blog;
