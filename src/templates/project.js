import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import zoom from 'medium-zoom';
import get from 'lodash/get';
import { ArrowLeftIcon, ArrowRightIcon } from 'mdi-react';
import formatDate from 'date-fns/format';
import Container from '../components/container';
import Markdown from '../components/markdown';
import { appendImageDescriptions } from '../utils';

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
  .image-description {
    text-align: center;
    font-size: 0.85rem;
    margin: -36px 0 24px;
    color: slategray;
  }

  .prev-next {
    .mdi-icon {
      margin-right: 12px;
    }
    .col-6:nth-of-type(2) {
      a {
        justify-content: flex-end;
      }

      .mdi-icon {
        margin: 0 0 0 12px;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
      font-size: 18px;

      &:hover {
        font-weight: bold;
      }
    }

    .disabled {
      color: slategray;
    }
  }
`;

export default class ProjectPage extends React.Component {
  imageEls = [];
  componentDidMount() {
    zoom(document.querySelectorAll('.markdown img'));
    appendImageDescriptions();
  }

  componentWillUnmount() {
    while (this.imageEls.length) {
      const el = this.imageEls.shift();
      el.remove();
    }
  }

  get slug() {
    return this.props.pathContext.slug;
  }

  get posts() {
    return get(this.props, 'data.projects.edges', []).map((p) => p.node);
  }

  get post() {
    return this.posts.filter((p) => p.slug === this.slug).shift();
  }

  renderPrevPost() {
    const { posts } = this;
    const curIdx = posts.findIndex((p) => p.slug === this.slug);
    const post = posts[curIdx - 1];

    if (post) {
      return (
        <Link to={`/projects/${post.slug}`}>
          <ArrowLeftIcon /> {post.title}
        </Link>
      );
    }
    return (
      <div className="disabled">
        No newer projects
      </div>
    );
  }

  renderNextPost() {
    const { posts } = this;
    const curIdx = posts.findIndex((p) => p.slug === this.slug);
    const post = posts[curIdx + 1];

    if (post) {
      return (
        <Link to={`/projects/${post.slug}`}>
          {post.title} <ArrowRightIcon />
        </Link>
      );
    }
    return (
      <div className="disabled">
        No newer projects
      </div>
    );
  }

  render() {
    const { post } = this;

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
          <div className="mt-4" />
          <div className="row">
            <div className="col-12 col-md-8 order-2 order-md-1">
              <Markdown source={post.content.content} />
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2 mb-4">
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

          <div className="row mt-5 prev-next">
            <div className="col-6">
              {this.renderPrevPost()}
            </div>
            <div className="col-6">
              {this.renderNextPost()}
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ProjectPageQuery {
    projects: allContentfulPost(
      sort: { fields: [order], order: ASC },
      filter: { type: { eq: "project" }}
    ) {
      edges {
        node {
          id
          title
          slug
          description
          publishDate
          medium
          role
          for
          order
          featureImage {
            file {
              url
              fileName
              contentType
            }
          }
          content {
            content
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
