import React from 'react';
import get from 'lodash/get';
import formatDate from 'date-fns/format';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Container from '../components/container';
import Button from '../components/button';

const Tagline = styled.h1`
  text-transform: uppercase;
  text-align: center;
  max-width: 300px;
  margin: 5rem auto 8rem;
  font-size: 1rem;
  position: relative;
  letter-spacing: 1px;

  &:after {
    position: absolute;
    content: '';
    width: 75px;
    height: 3px;
    bottom: -30px;
    left: calc(50% - 75px/2);
    background: black;
  }
`;

const Post = ({ post }) => (
  <div>
    <img src={post.featureImage.file.url} style={{ maxWidth: '100%', marginBottom: '12px' }} alt="Feature" />
    <h3 style={{ fontSize: '20px' }}>{post.title}</h3>
    <p>{post.description}</p>
    <div className="d-flex align-items-center">
      <span>{formatDate(new Date(post.publishDate), 'MMM YYYY')}</span>
      <Link className="ml-auto" to={`/blog/${post.slug}`}>
        <Button type="primary">Read More</Button>
      </Link>
    </div>
  </div>
);

export default function ProjectsPage(props) {
  const posts = get(props, 'data.posts.edges');

  return (
    <div>
      <Helmet title="posts | Ashley Worsham" />

      <Tagline>
        Sharing My Thoughts And Ideas
      </Tagline>

      <Container>
        <div className="row">
          {posts.map(({ node }) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Post post={node} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query PostsPageQuery {
    posts: allContentfulPost(
      sort: { fields: [order], order: ASC },
      filter: { type: { eq: "post" }}
    ) {
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
