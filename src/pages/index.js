import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Container from '../components/container';
import Item from '../components/item';
import Button from '../components/button';
import Tagline from '../components/tagline';

const Hero = styled.div`
  padding: 0;
  margin-bottom: 3rem;

  @media (max-width: 568px) {
    padding: 2rem 0;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  z-index: -1;
  padding: 0 24px;

  @media (min-width: 1200px) {
    min-height: 80vh;
  }

  &:after {
    padding-top: 100%;
  }

  img {
    width: 100%;
  }

  ${Tagline} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    margin: 0;
  }
`;

export default function HomePage(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.posts.edges');

  return (
    <div>
      <Helmet title={siteTitle} />

      <Hero>
        <HeroImageContainer>
          <Tagline>
            Designing Delightful,<br />Intuitive Experiences
          </Tagline>
          <img src="/images/hero.png" alt="" />
        </HeroImageContainer>
      </Hero>

      <Container maxWidth={998}>
        {posts.map(({ node: post }, i) => (
          <Item
            key={post.slug}
            position={i}
            post={post}
          />
        ))}

        <div className="text-center">
          <Link to="/work">
            <Button style={{
 width: '200px', height: '60px', fontSize: '18px',
}}
            >See More Projects
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allContentfulPost(
      sort: { fields: [order], order: ASC },
      filter: { featured: { eq: true }}
    ) {
      edges {
        node {
          id
          title
          slug
          description
          publishDate
          medium
          featureImage {
            file {
              url
              fileName
              contentType
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
