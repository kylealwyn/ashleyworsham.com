const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

const createPostPages = ({ graphql, createPage }) =>
  graphql(`
      {
        allContentfulPost(limit: 1000, filter: { type: { eq: "post" } }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    .then((result) => {
      if (result.errors) {
        throw result.errors;
      }

      const postTemplate = path.resolve('./src/templates/post.js');

      _.each(result.data.allContentfulPost.edges, (edge) => {
        createPage({
          path: `/blog/${edge.node.slug}`,
          component: slash(postTemplate),
          context: {
            slug: edge.node.slug,
          },
        });
      });
    });

const createProjectPages = ({ graphql, createPage }) =>
  graphql(`
      {
        allContentfulPost(limit: 1000, filter: { type: { eq: "project" } }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    .then((result) => {
      if (result.errors) {
        throw result.errors;
      }

      const projectTemplate = path.resolve('./src/templates/project.js');

      _.each(result.data.allContentfulPost.edges, (edge) => {
        createPage({
          path: `/projects/${edge.node.slug}`,
          component: slash(projectTemplate),
          context: {
            slug: edge.node.slug,
          },
        });
      });
    });

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const params = { graphql, createPage };

  return new Promise((resolve, reject) => {
    createPostPages(params)
      .then(() => createProjectPages(params))
      .then(resolve)
      .catch(reject);
  });
};
