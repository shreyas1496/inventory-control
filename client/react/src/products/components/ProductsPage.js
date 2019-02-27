import React from "react";
import ProductsTable from "./ProductsTable";
import ProductClient from "../../common/clients/ProductClient";
import { FormControl, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";
import TransactionClient from "../../common/clients/TransactionClient";
import SellingModal from "./SellingModal";

class ProductsPage extends React.Component {
  state = {
    isAdding: false,
    isEditing: false,
    isSelling: false,
    products: [],
    editableProduct: {},
    search: "",
    sellableProduct: {}
  };

  componentDidMount() {
    this._searchProducts();
  }

  _searchProducts = search => {
    ProductClient.getProducts(search).then(res =>
      this.setState({ products: res.data })
    );
  };

  _closeModal = () =>
    this.setState({ isAdding: false, isEditing: false, isSelling: false });

  _addProduct = () => this.setState({ editableProduct: {}, isAdding: true });

  _updateProduct = product =>
    this.setState({ editableProduct: product, isEditing: true });

  _showSellModal = product =>
    this.setState({ sellableProduct: product, isSelling: true });

  _onChange = e => {
    this.setState({ search: e.target.value });
    this._searchProducts(e.target.value);
  };

  _onProductChange = e => {
    this.setState({
      editableProduct: {
        ...this.state.editableProduct,
        [e.target.name]: e.target.value
      }
    });
  };
  _onSellingProductChange = e => {
    this.setState({
      sellableProduct: {
        ...this.state.sellableProduct,
        [e.target.name]: e.target.value
      }
    });
  };

  _sellProduct = () => {
    const { sellableProduct } = this.state;
    if (!sellableProduct.selling_quantity) {
      alert("Please select quantity");
      return;
    }
    TransactionClient.postTransaction({
      product_id: sellableProduct.id,
      quantity: sellableProduct.selling_quantity,
      price: sellableProduct.price,
      transaction_type: "sell"
    })
      .then(this._closeModal)
      .then(this._searchProducts);
  };

  render() {
    const {
      products,
      search,
      isAdding,
      isEditing,
      isSelling,
      editableProduct,
      sellableProduct
    } = this.state;
    return (
      <div>
        <div className="inline">
          <FormControl
            placeholder="Type to search"
            onChange={this._onChange}
            value={search}
          />
          <Button variant="primary" onClick={this._addProduct}>
            Add product
          </Button>
        </div>
        <ProductModal
          show={isAdding || isEditing}
          isAdding={isAdding}
          isEditing={isEditing}
          handleClose={this._closeModal}
          onChange={this._onProductChange}
          product={editableProduct}
        />
        <SellingModal
          show={isSelling}
          handleClose={this._closeModal}
          onChange={this._onSellingProductChange}
          product={sellableProduct}
          sell={this._sellProduct}
        />
        <ProductsTable
          products={products}
          editProduct={product => this._updateProduct(product)}
          showSellModal={this._showSellModal}
        />
      </div>
    );
  }
}

export default ProductsPage;
