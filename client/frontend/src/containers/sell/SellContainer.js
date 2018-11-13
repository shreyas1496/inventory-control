import React from 'react';
import { connect } from 'react-redux';
import { Modal, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import { SellForm, ProductTableWithPagination, Counter } from '../../common/components';
import { getProducts } from '../../actions/ProductActions'; //named exports
import { postTransaction } from '../../actions/TransactionActions';

class SellContainer extends React.Component {
  state = {
    products: [],
    showSellModal: false,
    product: {},
  };

  componentDidMount() {
    this._searchProducts();
  }

  quantityRef = React.createRef()
  priceRef = React.createRef()
  _searchProducts = () => {
    getProducts()
      .then(res => {
        if (res.status === 200) {
          this.setState({ products: res.data });
        } else {
          throw 'unexpected exception';
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
    console.log(quantity,price);
    const { product } = this.state;
    postTransaction({
      product_id: product.id,
      quantity: quantity,
      price: price || product.price,
      transaction_type: 'sell',
    });
  };
  render() {
    const { showSellModal, product } = this.state;
    return (
      <div>
        SellContainer
        <Modal show={showSellModal} onHide={this.hideModal}>
          <Modal.Header>Sell</Modal.Header>
          <form>
            <Modal.Body>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  disabled="true"
                  value={product.name}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Price</ControlLabel>
                <input
                  type="number"
                  defaultValue={product.price}
                  ref={this.priceRef}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Quantity</ControlLabel>
                <input
                  type="number"
                  defaultValue={product.on_hand}
                  ref={this.quantityRef}
                  max={product.on_hand}
                />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={() => this.sellProduct(this.quantityRef.current.value, this.priceRef.current.value)}>Sell</button>
            </Modal.Footer>
          </form>
        </Modal>
        <SellForm searchProducts={this._searchProducts} />
        <ProductTableWithPagination products={this.state.products} showModal={this.showModal} />
      </div>
    );
  }
}

export default SellContainer;
