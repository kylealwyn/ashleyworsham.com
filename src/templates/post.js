import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '../components/container';
import Markdown from '../components/markdown';

const Content = styled(Container)`
  img {
    max-width: 100%;
  }
`;

const PostTemplate = ({ data: { post } }) => (
  <Content maxWidth={720}>
    <Helmet title={post.title} />
    <h1>{post.title}</h1>
    <p>
      {post.createdAt}
    </p>

    <hr />

    <Markdown source={post.content.content} />

  </Content>
);

export default PostTemplate;

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      description
      createdAt
      content {
        content
      }
    }
  }
`;
