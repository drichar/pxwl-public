import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };

  componentDidMount() {
    const element = document.querySelector('header');

    this.setState({ top: element.offsetTop });

    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const { title } = this.props;
    const { scroll, top } = this.state;

    return (
      <Container className={scroll > top ? 'fixed-nav' : ''}>
        <Link to="/">
          <Title as="h1">{title}</Title>
        </Link>

        <Nav />
      </Container>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
