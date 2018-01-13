const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulPost(limit: 1000) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const postTemplate = path.resolve(`./src/templates/post.js`)

        _.each(result.data.allContentfulPost.edges, edge => {
          createPage({
            path: `/blog/${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        resolve();
      }).catch(reject)
  })
}
