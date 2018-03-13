import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import formatDate from 'date-fns/format';
import Container from '../components/container';
import Markdown from '../components/markdown';
import Tagline from '../components/tagline';

const Content = styled(Container)`
  img {
    max-width: 100%;
  }
`;

const PostTitle = styled.h1`
  text-align: center;
  margin-top: 24px;
`;

const PostPublished = styled.div`
  margin: 0;
  text-align: center;
  font-size: 18px;
`;

const PostTemplate = ({ data: { post } }) => (
  <Content maxWidth={720}>
    <Helmet title={post.title} />

    <Tagline>{post.title}</Tagline>
    <img src={post.featureImage.file.url} alt="" />
    <div className="mt-5" />
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
      publishDate
      content {
        content
      }
      featureImage {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;
