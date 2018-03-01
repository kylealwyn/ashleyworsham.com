import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Header = styled.header`
  display: flex;
  height: 60px;
  padding: 1rem;
  align-items: center;
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
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;

  }

  li + li {
    margin-left: 1rem;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export default () => (
  <Header>
    <a href="/">
      <Logo src="/images/logo.png" alt="Logo" />
    </a>
    <Nav>
      <NavList>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </NavList>
    </Nav>
  </Header>
);
