import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    console.log(this.props.data)
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPost.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.slug
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={`/blog/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          id
          title
          slug
          description
          createdAt
          updatedAt
        }
      }
    }
  }
`
