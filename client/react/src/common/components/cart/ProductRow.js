import React from 'react';
import PropTypes from 'prop-types';

class ProductRow extends React.Component {
  shouldComponentUpdate(prevProps) {
    if (
      this.props.product.price !== prevProps.price
      || this.props.product.quantity !== prevProps.quantity
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { product, removeProduct } = this.props;
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.company}</td>
        <td>{product.description}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>
          <button type="button" onClick={() => removeProduct(product.id)}>
            Remove Product
          </button>
        </td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

ProductRow.defaultProps = {};

export default ProductRow;
