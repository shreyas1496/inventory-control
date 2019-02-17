import React from 'react';
import PropTypes from 'prop-types';

class ProductRow extends React.Component {
  shouldComponentUpdate(prevProps) {
    if (
      this.props.product.price !== prevProps.price ||
      this.props.product.quantity !== prevProps.quantity
    ) {
      return true;
    }
    return false;
  }

  onQuantityChange = ({ target: { value: newQuantity } }) => {
    const { product, updateProduct } = this.props;
    const updatedProduct = { ...product };
    updatedProduct.quantity = parseFloat(newQuantity);
    updatedProduct.value = newQuantity * product.price;
    updateProduct(updatedProduct);
  };

  onPriceChange = ({ target: { value: newPrice } }) => {
    const { product, updateProduct } = this.props;
    const updatedProduct = { ...product };
    updatedProduct.price = newPrice;
    updatedProduct.value = newPrice * product.quantity;
    updateProduct(updatedProduct);
  };

  onValueChange = ({ target: { value: newValue } }) => {
    const { product, updateProduct } = this.props;
    const updatedProduct = { ...product };
    updatedProduct.value = newValue;
    updatedProduct.price = newValue / product.quantity;
    updateProduct(updatedProduct);
  };

  render() {
    const {
      product: {
        id, name, company, description, quantity, price, value, onHand,
      },
      removeProduct,
    } = this.props;
    return (
      <tr key={id}>
        <td>
          {name}
          {quantity}
        </td>
        <td>{company}</td>
        <td>{description}</td>
        <td>
          <input
            type="number"
            value={quantity}
            onChange={this.onQuantityChange}
            min="0"
            max={onHand}
          />
        </td>
        <td>
          <input type="number" value={price} onChange={this.onPriceChange} min="0" />
        </td>
        <td>
          <input
            type="number"
            value={value || price * quantity}
            onChange={this.onValueChange}
            min="0"
          />
        </td>
        <td>
          <button type="button" onClick={() => removeProduct(id)}>
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
  updateProduct: PropTypes.func.isRequired,
};

ProductRow.defaultProps = {};

export default ProductRow;
