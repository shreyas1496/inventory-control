import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeProductFromCart, updateProduct } from '../../actions/AppStateActions';
import ProductRow from '../../common/components/cart/ProductRow';

const billOfProducts = products => products.reduce((a, b) => a + b.quantity * b.price, 0);

const Cart = ({ products, removeProduct, updateProduct }) => (
  <div>
    <Table stripped="true" bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow
            product={product}
            key={product.id}
            removeProduct={removeProduct}
            updateProduct={updateProduct}
          />
        ))}
      </tbody>
    </Table>
    <h1>Bill {billOfProducts(products)}</h1>
  </div>
);

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.appState.cart,
});

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(removeProductFromCart(id)),
  updateProduct: product => dispatch(updateProduct(product)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
