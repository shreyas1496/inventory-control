import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../../actions/AppStateActions';

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
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.company}</td>
            <td>{product.description}</td>
            <td>{product.on_hand}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => removeProduct(product.id)}>Remove Product</button>
            </td>
          </tr>
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
