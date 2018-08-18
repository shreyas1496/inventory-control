import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import business from '../../../config/business';

const MyNavbar = props => (props.showNavbar ? (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/dashboard">{props.NavbarBrand}</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <Link to="/dashboard">Home</Link>
        <NavItem>Buy</NavItem>
        <NavItem>
          <Link to="/sell">Sell</Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
) : (
  <div />
));

MyNavbar.propTypes = {
  NavbarBrand: PropTypes.string,
  showNavbar: PropTypes.bool.isRequired,
};

MyNavbar.defaultProps = {
  NavbarBrand: business.NavbarBrand,
};
export default MyNavbar;
