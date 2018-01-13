module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Blog',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://ashleyworsham.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'e2iny0f983lo',
        accessToken: '8fbfefd22a33c6b747fc4b7cdfd3d37e283b697a1f70ebc0b42fd1bee54a7f73',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
