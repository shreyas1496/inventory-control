import React from 'react';
import {
  Modal, FormControl, ControlLabel, FormGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const SellModal = (props) => {
  const {
    showSellModal, product, priceRef, quantityRef, hideModal, sellProduct,
  } = props;
  return (
    <Modal show={showSellModal} onHide={hideModal}>
      <Modal.Header>Sell</Modal.Header>
      <form>
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" disabled="true" value={product.name} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <input type="number" defaultValue={product.price} ref={priceRef} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Quantity</ControlLabel>
            <input
              type="number"
              defaultValue={product.on_hand}
              ref={quantityRef}
              max={product.on_hand}
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => sellProduct(quantityRef.current.value, priceRef.current.value)}
          >
            Sell
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

SellModal.propTypes = {
  showSellModal: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  priceRef: PropTypes.object.isRequired,
  quantityRef: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  sellProduct: PropTypes.func.isRequired,
};

export default SellModal;
