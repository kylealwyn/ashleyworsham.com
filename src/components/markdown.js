// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import styled from 'styled-components';

// const MarkdownContainer = styled.div`
//   display: block;
//   margin: 0 auto;
//   max-width: 768px;

//   p {
//     line-height: 1.5;
//   }

//   img {
//     max-width: 100%;
//   }
// `;

// export default ({ children, source }) => (
//   <MarkdownContainer>
//     <ReactMarkdown
//       skipHtml={false}
//       escapeHtml={false}
//       source={source || children}
//     />
//   </MarkdownContainer>
// );

import React from 'react';
import CommonMark from 'commonmark';
import styled from 'styled-components';

const parser = new CommonMark.Parser();
const writer = new CommonMark.HtmlRenderer();

const MarkdownContainer = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 768px;

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

export default ({ children, source }) => {
  const ast = parser.parse(source || children);
  const tree = writer.render(ast);

  return (
    <MarkdownContainer>
      <div dangerouslySetInnerHTML={{ __html: tree }} />
    </MarkdownContainer>
  );
};
