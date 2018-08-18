import React from 'react';
import { Navbar } from '../../common/components';

class NavbarContainer extends React.Component {
  render() {
    return <Navbar {...this.props} />;
  }
}

export default NavbarContainer;
