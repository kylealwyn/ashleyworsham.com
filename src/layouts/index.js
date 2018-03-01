import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import THEME from '../theme';

injectGlobal`
  body {
    font-family: Roboto, sans-serif;
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
