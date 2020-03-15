import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Header = styled.header`
  display: block;
  padding: 23px 24px;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: top;
`;

const Logo = styled.img`
  width: 40px;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;

  li {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    font-family: Istok Web, sans-serif;

  }

  li + li {
    margin-left: 2rem;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
  }
`;

const activeLinkStyle = {
  fontWeight: '900',
};

export default () => (
  <Header>
    <InnerWrapper>
      <a href="/">
        <Logo src="/images/logo.png" alt="Logo" />
      </a>
      <Nav>
        <NavList>
          <li>
            <Link to="/work" activeStyle={activeLinkStyle}>
            Work
            </Link>
          </li>
          <li>
            <Link to="/blog" activeStyle={activeLinkStyle}>
            Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </NavList>
      </Nav>
    </InnerWrapper>
  </Header>
);
