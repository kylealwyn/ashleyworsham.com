import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import THEME from '../theme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    font-family: Lora, sans-serif !important;
  }

  h1,h2,h3,h4,h5,h6, button {
    font-family: Istok Web !important;
  }

  img {
    max-width: 100%;
  }
`;

export default ({ children }) => (
  <ThemeProvider theme={THEME}>
    <div>
      <Header />
      <main>
        {children()}
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);
