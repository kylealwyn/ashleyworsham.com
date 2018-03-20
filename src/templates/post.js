import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import zoom from 'medium-zoom';
import Container from '../components/container';
import Markdown from '../components/markdown';
import Tagline from '../components/tagline';

const Content = styled(Container)`
  img {
    max-width: 100%;
  }
`;

export default class PostTemplate extends React.Component {
  componentDidMount() {
    zoom(document.querySelectorAll('.markdown img'));
  }

  render() {
    const { data: { post } } = this.props;

    return (
      <Content maxWidth={720}>
        <Helmet title={post.title} />

        <Tagline>{post.title}</Tagline>
        <img src={post.featureImage.file.url} alt="" />
        <div className="mt-5" />
        <Markdown source={post.content.content} />
      </Content>
    );
  }
}

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
