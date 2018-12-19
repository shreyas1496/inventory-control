import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Highlight from '../Highlight';
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
        <NavItem componentClass={Link} to="/dashboard" href="/dashbord">
            Home
        </NavItem>
        <NavItem componentClass={Link} to="/sell" href="/sell">
            Sell
        </NavItem>
        <NavItem componentClass={Link} to="/cart" href="/cart">
          <Highlight
            WrappedComponent={(
              <div>
                  Cart
                {` ${props.cartItems}`}
              </div>
)}
            updater={props.cartItems}
          />
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
  cartItems: PropTypes.number.isRequired,
};

MyNavbar.defaultProps = {
  NavbarBrand: business.NavbarBrand,
};
export default MyNavbar;
