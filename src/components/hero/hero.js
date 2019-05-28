import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './hero.css';

const Hero = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
