import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Counter from '../Counter';

const ProductTableWithPagination = ({ products, showModal }) => (
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
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ProductTableWithPagination.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductTableWithPagination;
