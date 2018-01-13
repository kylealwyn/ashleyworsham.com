import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
  p {
    line-height: 1.5;
  }
`;

export default ({ children }) => (
  <MarkdownContainer>
    <ReactMarkdown source={children} />
  </MarkdownContainer>
);
