import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Our Story</Link>
      </li>
      <li>
        <Link to="/">Features</Link>
      </li>
      <li>
        <Link to="/">Pricing</Link>
      </li>
      <li>
        <Link to="/">Jobs</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
