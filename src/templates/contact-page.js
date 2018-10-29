import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ContactPageTemplate = ({ title }) => (
  <section className="section section--gradient">
    <h2
      className="has-text-weight-bold is-size-2"
      style={{
        boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
        backgroundColor: "#f40",
        color: "white",
        padding: "1rem"
      }}
    >
      {title}
    </h2>
  </section>
);

ContactPageTemplate.propTypes = {
  title: PropTypes.string
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
