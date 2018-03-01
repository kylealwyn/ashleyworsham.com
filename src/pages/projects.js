import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '../components/container';
import Item from '../components/item';
import { COLORS } from '../config/constants';

const Tagline = styled.h1`
  text-transform: uppercase;
  text-align: center;
  max-width: 300px;
  margin: 5rem auto 8rem;
  font-size: 1.25rem;
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

const Projects = ({ projects = [] }) => {
  let counter = 0;
  const nodes = [];
  const colorLength = COLORS.length;

  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    const nextProject = projects[i + 1];

    if (nextProject && counter === 2) {
      nodes.push((
        <div className="row">
          <div className="col-12 col-lg-6">
            <Item
              key={project.slug}
              position={i % colorLength}
              post={project}
            />
          </div>
          <div className="col-12 col-lg-6">
            <Item
              key={project.slug}
              position={(i + 1) % colorLength}
              post={nextProject}
            />
          </div>
        </div>
      ));
      i += 1;
      counter = 0;
    } else {
      nodes.push((
        <div className="row">
          <div className="col-12">
            <Item
              key={project.slug}
              position={i % colorLength}
              post={project}
            />
          </div>
        </div>
      ));
      counter += 1;
    }
  }

  return (
    <div>
      {nodes}
    </div>
  );
};

export default function ProjectsPage(props) {
  const projects = get(props, 'data.projects.edges');

  return (
    <div>
      <Helmet title="Projects | Ashley Worsham" />

      <Tagline>
        Designing Delightful Intuitive Experiences
      </Tagline>

      <Container>
        <Projects projects={projects.map(({ node }) => node)} />
      </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query ProjectsPageQuery {
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
