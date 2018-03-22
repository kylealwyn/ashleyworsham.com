import React from 'react';
import CommonMark from 'commonmark';
import styled from 'styled-components';

const parser = new CommonMark.Parser();
const writer = new CommonMark.HtmlRenderer();

const MarkdownContainer = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 768px;

  h2 {
    margin-top: 32px;
    font-size: 24px;
    font-weight: 700;
  }

  h2:first-of-type {
    margin-top: 0;
  }

  p {
    line-height: 1.5;
    font-size: 20px;
  }

  img {
    display: block;
    margin: 48px auto;
    max-width: 75%;
  }

  .row img {
    margin: 0px auto 48px;
  }

  .row {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
`;

export default ({ children, source }) => {
  const ast = parser.parse(source || children);
  const tree = writer.render(ast);

  return (
    <div className="markdown">
      <MarkdownContainer>
        <div dangerouslySetInnerHTML={{ __html: tree }} />
      </MarkdownContainer>
    </div>
  );
};
