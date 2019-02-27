import React from "react";
import {
  Button,
  Modal,
  FormGroup,
  FormLabel,
  FormControl,
  FormText
} from "react-bootstrap";

class SellingModal extends React.Component {
  render() {
    const {
      show,
      handleClose,
      product,
      sell,
      onChange
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            Sell {' '} {product.name}
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <FormLabel>On hand</FormLabel>
              <FormText>
                {product.on_hand}
              </FormText>
            </FormGroup>
            <FormGroup>
              <FormLabel>Quantity</FormLabel>
              <FormControl
              type="number"
                id="product-sell-quantity"
                name="selling_quantity"
                onChange={onChange}
                value={product.selling_quantity}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Price</FormLabel>
              <FormControl
              type="number"
                id="product-sell-price"
                name="price"
                onChange={onChange}
                value={product.price}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={sell}>
              Sell
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SellingModal;
