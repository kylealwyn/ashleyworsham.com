import React from 'react';
import get from 'lodash/get';
import formatDate from 'date-fns/format';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Container from '../components/container';
import Button from '../components/button';
import Tagline from '../components/tagline';

const Post = ({ post }) => (
  <Link className="ml-auto" to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{ background: 'white', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <img src={post.featureImage.file.url} style={{ maxWidth: '100%', marginBottom: '24px' }} alt="Feature" />
      <h3 style={{ fontSize: '20px' }}>{post.title}</h3>
      <span>{formatDate(new Date(post.publishDate), 'MMM YYYY')}</span>
      <div className="text-right">
        <Button type="primary">Read More</Button>
      </div>
    </div>
  </Link>
);

export default function ProjectsPage(props) {
  const posts = get(props, 'data.posts.edges');

  return (
    <div>
      <Helmet title="posts | Ashley Worsham">
        <body style="background: #EBE1FA" />
      </Helmet>

      <Tagline>
        Sharing My Thoughts<br />And Ideas
      </Tagline>

      <Container>
        <div className="row">
          {posts.map(({ node }) => (
            <div className="col-12 col-sm-6 col-md-4  ">
              <Post post={node} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query PostsPageQuery {
    posts: allContentfulPost(
      sort: { fields: [order], order: ASC },
      filter: { type: { eq: "post" }}
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
