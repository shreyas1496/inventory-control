import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductsTable = ({ products, showSellModal, addToCart, editProduct }) => (
  <div>
    <Table stripped="true" bordered condensed="true" hover>
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
              <ButtonGroup>
              <Button variant="secondary" onClick={() => editProduct(product)}>Edit</Button>
              <Button variant="primary" onClick={() => showSellModal(product)}>Sell</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  showSellModal: PropTypes.func.isRequired,
};

export default ProductsTable;
