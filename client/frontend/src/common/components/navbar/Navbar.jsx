import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import business from '../../../config/business';

const MyNavbar = props => (props.showNavbar ? (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/dashboard">{props.NavbarBrand}</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/dashboard">
            Home
        </NavItem>
        <NavItem eventKey={2} href="/buy">
            Buy
        </NavItem>
        <NavItem eventKey={3} href="/sell">
            Sell
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
