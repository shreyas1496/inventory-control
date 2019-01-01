import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../actions/AppStateActions';
import ProductRow from '../../common/components/cart/ProductRow';

const Cart = ({ products, removeProduct }) => (
  <div>
    <Table stripped="true" bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Description</th>
          <th>On hand</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow product={product} key={product.id} removeProduct={removeProduct} />
        ))}
      </tbody>
    </Table>
  </div>
);

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.appState.cart,
});

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(removeProductFromCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
