import styled from 'styled-components';

export default styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${(p) => p.maxWidth || 968}px;
  padding: 15px;
`;
