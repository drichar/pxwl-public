import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Container, Content } from './hero.css';

const Hero = ({ children }) => (
  <Parallax bgImage={require('../../images/hollywood-bg.jpg')} strength={300}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Parallax>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
