import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductTableWithPagination = ({ products, showModal, addToCart }) => (
  <div>
    <Table stripped="true" bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Description</th>
          <th>Location</th>
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
            <td>{product.location}</td>
            <td>{product.on_hand}</td>
            <td>{product.price}</td>
            <td>
              <button>Edit</button>
              <button onClick={() => showModal(product)}>Sell</button>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ProductTableWithPagination.propTypes = {
  products: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ProductTableWithPagination;
