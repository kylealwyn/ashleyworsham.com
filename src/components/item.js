import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import formatDate from 'date-fns/format';
import withState from 'recompose/withState';
import { COLORS } from '../config/constants';

const enhancer = withState('hovering', 'setHovering', false);

const Project = styled.div`
  position: relative;
  background: ${(props) => props.bg || '#eee'};
  padding: 35px;
  overflow: hidden;
  height: 350px;
  margin-bottom: 30px;

  @media (max-width: 528px) {
    height: auto;
  }
`;

const ProjectImage = styled.img`
  max-width: 200px;
  margin-bottom: 32px;
  padding-right: 1rem;
  @media (max-width: 528px) {
    max-width: 140px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  color: black;
  letter-spacing: 1px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: black;
`;

const ProjectPublishedBadge = styled.span`
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

const ViewButton = styled.button`
  background: black;
  padding: 10px;
  color: white;
  position: absolute;
  bottom: -10px;
  right: 50% ;
  transition: 175ms;
  transform: translate(calc(100% + 15px), ${(props) => (props.showing ? '-10px' : '100%')});
  border: 0;
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
`;

export default enhancer(({
  hovering, setHovering, post, position,
}) => (
  <Link style={{ textDecoration: 'none' }} to={`/projects/${post.slug}`}>
    <Project
      bg={COLORS[position]}
      onFocus={() => setHovering(() => true)}
      onBlur={() => setHovering(() => false)}
      onMouseOver={() => setHovering(() => true)}
      onMouseOut={() => setHovering(() => false)}
    >
      <div className="row" style={{ height: '100%' }}>
        <div className="col-12 col-sm-6">
          <div className="text-center">
            <ProjectImage src={post.featureImage.file.url} alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <ProjectTitle>
            {post.title}
          </ProjectTitle>

          <ProjectDescription>{post.description}</ProjectDescription>
          <ProjectPublishedBadge>
            {formatDate(post.publishDate, 'YYYY')} / {post.medium.toUpperCase()}
          </ProjectPublishedBadge>
        </div>
      </div>

      <ViewButton showing={hovering}>
        View Project
      </ViewButton>
    </Project>
  </Link>
));
