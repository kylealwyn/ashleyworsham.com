import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

export default class PostTemplate extends React.Component {
  render() {
    const { post } = this.props.data;

    return (
      <div>
        <Helmet title={post.title} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.createdAt}
        </p>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <div
          dangerouslySetInnerHTML={{ __html: post.remark.content.html }}
        />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      description
      remark: childContentfulPostContentTextNode {
        content: childMarkdownRemark {
          html
        }
      }
      createdAt
    }
  }
`
