import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Container from '../components/container';
import Item from '../components/item';
import Tagline from '../components/tagline';
import { COLORS } from '../config/constants';

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
      <Helmet title="Work | Ashley Worsham" />

      <Tagline>
        Designing Delightful,<br /> Intuitive Experiences
      </Tagline>

      <Container maxWidth={998}>
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
