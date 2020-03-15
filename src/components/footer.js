import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  margin-top: 3rem;
  padding: 1rem 0;
  font-size: 12px;
`;

export default () => {
  const year = new Date().getFullYear();
  return (
    <Footer>
      <div className="text-center">
      Ashley Worsham <br />&copy; {year}
      </div>
    </Footer>
  );
};
