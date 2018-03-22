require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Ashley Worsham\'s Portfolio',
    description: 'The personal portfolio of Ashley Worsham, a UX designer based in San Francisco',
    siteUrl: 'https://ashleyworsham.com',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'e2iny0f983lo',
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPost } }) => allContentfulPost.edges.map((edge) => Object.assign({}, edge.node.frontmatter, {
              title: edge.node.title,
              date: edge.node.updatedAt,
              description: edge.node.description,
              url: site.siteMetadata.siteUrl + edge.node.slug,
              guid: site.siteMetadata.siteUrl + edge.node.slug,
              custom_elements: [{ 'content:encoded': edge.node.content }],
            })),
            query: `
              {
                allContentfulPost(
                  limit: 1000
                ) {
                  edges {
                    node {
                      title
                      description
                      slug
                      content {
                        content
                      }
                      createdAt
                      updatedAt
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};
