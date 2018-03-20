import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import zoom from 'medium-zoom';
import formatDate from 'date-fns/format';
import Container from '../components/container';
import Markdown from '../components/markdown';

const HEADER_HEIGHT = 80;
const Header = styled.div`
  position: relative;
  top: -${HEADER_HEIGHT}px;
  margin-bottom: -${HEADER_HEIGHT}px;
  padding: ${HEADER_HEIGHT * 1.5}px 0 2rem;
  background: #B4A7C8;
  z-index: -1;
`;

const ProjectTitle = styled.h1`
  font-size: 36px;
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ProjectDescription = styled.p`
  font-size: 20px;
  margin: 0 0 12px;
`;

const ProjectFeatureImage = styled.img`
  max-width: 250px;

  @media (max-width: 528px) {
    max-width: 175px;
  }
`;

const ProjectPublishedBadge = styled.span`
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

const DefinitionList = styled.dl`
  margin: 0;
  font-size: 18px;

  dt:not(:first-child) {
    margin-top: 12px;

    + dd {
      margin-top: 0;
    }
  }

  dd {
    margin: 0;
  }
`;

const Content = styled(Container)`

`;

export default class ProjectPage extends React.Component {
  componentDidMount() {
    zoom(document.querySelectorAll('.markdown img'));
  }

  render() {
    const { post } = this.props.data;

    return (
      <div>
        <Helmet title={post.title} />
        <Header>
          <Container>
            <div className="row">
              <div className="col-12 col-sm-6 order-2 order-sm-1">
                <ProjectTitle>{post.title}</ProjectTitle>
                <ProjectDescription>
                  {post.description }
                </ProjectDescription>
                <ProjectPublishedBadge>
                  {formatDate(post.publishDate, 'YYYY')} / {post.medium.toUpperCase()}
                </ProjectPublishedBadge>
              </div>
              <div className="col-12 col-sm-6 order 1 order-sm-2">
                <div className="text-sm-center">
                  <ProjectFeatureImage src={post.featureImage.file.url} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </Header>
        <Content>
          <div className="mt-5" />
          <div className="row">
            <div className="col-12 col-sm-8 order-2 order-sm-1">
              <Markdown source={post.content.content} />
            </div>
            <div className="col-12 col-sm-4 order-1 order-sm-2 mb-3">
              <div className="card border-0">
                <div className="card-body bg-light">
                  <DefinitionList>
                    <dt>Date</dt>
                    <dd>{formatDate(post.publishDate, 'MMMM YYYY')}</dd>

                    <dt>Role</dt>
                    <dd>{post.role}</dd>

                    <dt>For</dt>
                    <dd>{post.for}</dd>

                    <dt>Medium</dt>
                    <dd>{post.medium}</dd>
                  </DefinitionList>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query projectQuery($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      description
      createdAt
      publishDate
      type
      medium
      role
      for
      featureImage {
        file {
          url
        }
      }
      content {
        content
      }
    }
  }
`;
