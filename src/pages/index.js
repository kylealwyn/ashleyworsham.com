import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '../components/container';
import Item from '../components/item';
import Button from '../components/button';

const Hero = styled.div`
  background-image: url(/images/hero.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 12rem 0;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 568px) {
    padding: 8rem 0;
  }
`;

const Tagline = styled.h1`
  text-transform: uppercase;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  letter-spacing: 1px;

  &:after {
    position: absolute;
    content: '';
    width: 75px;
    height: 3px;
    bottom: -20px;
    left: calc(50% - 75px/2);
    background: black;
  }
`;

export default function HomePage(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.posts.edges');

  return (
    <div>
      <Helmet title={siteTitle} />

      <Hero>
        <Tagline>
          Designing Delightful Intuitive Experiences
        </Tagline>
      </Hero>

      <Container maxWidth={768}>
        {posts.map(({ node: post }, i) => (
          <Item
            key={post.slug}
            position={i}
            post={post}
          />
        ))}

        <div className="text-center">
          <Button>View All Projects</Button>
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
    posts: allContentfulPost(filter: { featured: { eq: true }}) {
      edges {
        node {
          id
          title
          slug
          description
          publishDate
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
