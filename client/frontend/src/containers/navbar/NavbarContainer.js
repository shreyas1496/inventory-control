import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../../common/components';

class NavbarContainer extends React.Component {
  render() {
    return <Navbar {...this.props} />;
  }
}

const mapStateToProps = state => ({
  cartItems: state.appState.cart.length,
});

export default connect(mapStateToProps)(NavbarContainer);
