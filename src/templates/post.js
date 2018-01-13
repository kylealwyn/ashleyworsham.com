import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Markdown from '../components/markdown';
import { rhythm, scale } from '../utils/typography'

export default class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;

    const { previous, next } = this.props.pathContext

    console.log(post)
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

        <Markdown>
          {post.content.content}
        </Markdown>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description
      content {
        content
      }
      createdAt
    }
  }
`
