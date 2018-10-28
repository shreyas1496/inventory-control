import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductTableWithPagination = ({ products }) => (
  <div>
    <Table stripped bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr>
            <td>{product.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ProductTableWithPagination.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductTableWithPagination;
