import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Hero from 'components/hero';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Hero>
      <Title as="h2" size="huge">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Hero>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
