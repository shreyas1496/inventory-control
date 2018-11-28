import React from 'react';
import SellModal from './SellModal';
import { SellForm, ProductTableWithPagination } from '../../common/components';
import { getProducts } from '../../actions/ProductActions'; //named exports
import { postTransaction } from '../../actions/TransactionActions';

class SellContainer extends React.Component {
  state = {
    products: [],
    showSellModal: false,
    product: {},
    searchValues: {
      name: '',
      company: '',
    },
  };

  componentDidMount() {
    this._searchProducts();
  }

  quantityRef = React.createRef();
  priceRef = React.createRef();
  _searchProducts = () => {
    getProducts(this.state.searchValues)
      .then(res => {
        if (res.status === 200) {
          this.setState({ products: res.data });
        } else {
          throw { message: 'unexpected exception' };
        }
      })
      .catch(err => {
        // alert(JSON.stringify(err));
        console.log(err);
      });
  };

  showModal = product => this.setState({ showSellModal: true, product });
  hideModal = () => this.setState({ showSellModal: false });
  sellProduct = (quantity, price) => {
    console.log(quantity, price);
    const { product } = this.state;
    postTransaction({
      product_id: product.id,
      quantity: quantity,
      price: price || product.price,
      transaction_type: 'sell',
    })
      .then(this.hideModal)
      .then(this._searchProducts);
  };

  _onSearchValueChange = (field, value) => {
    const { searchValues } = this.state;
    searchValues[field] = value;
    this.setState({ searchValues });
  };
  render() {
    const { showSellModal, product, searchValues } = this.state;
    return (
      <div>
        SellContainer
        <SellModal
          showSellModal={showSellModal}
          product={product}
          priceRef={this.priceRef}
          quantityRef={this.quantityRef}
          sellProduct={this.sellProduct}
          hideModal={this.hideModal}
        />
        <SellForm
          values={searchValues}
          onChange={this._onSearchValueChange}
          searchProducts={this._searchProducts}
        />
        <ProductTableWithPagination products={this.state.products} showModal={this.showModal} />
      </div>
    );
  }
}

export default SellContainer;
