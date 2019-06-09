import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import HomeHero from "../components/HomeHero";
import PageFlip from "../components/pageFlip";

export default ({ data }) => {
  const { page_flips } = data.wordpressPage.acf;
  return (
    <Layout>
      <SEO title="Home Page" />
      <div id="fullpage" className="full-height-sections">
        <HomeHero />
        {page_flips.map((flip, index) => (
          <PageFlip num={index} key={index} content={flip} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    wordpressPage(wordpress_id: { eq: 3 }) {
      id
      slug
      title
      acf {
        page_flips {
          page_title
          page_link
          page_description
          page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
