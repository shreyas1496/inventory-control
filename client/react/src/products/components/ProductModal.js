import React from "react";
import {
  Button,
  Modal,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

class ProductModal extends React.Component {
  render() {
    const {
      show,
      handleClose,
      isAdding,
      isEditing,
      product,
      handleSubmit,
      onChange
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {isAdding && "Add new Product"}
            {isEditing && "Update Product"}
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl
                id="product-modal-name"
                name="name"
                onChange={onChange}
                value={product.name}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Company</FormLabel>
              <FormControl
                id="product-modal-company"
                name="company"
                onChange={onChange}
                value={product.company}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl
                id="product-modal-name"
                name="name"
                onChange={onChange}
                value={product.name}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Description</FormLabel>
              <FormControl
                id="product-modal-desc"
                name="description"
                type="text"
                onChange={onChange}
                value={product.description}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Location</FormLabel>
              <FormControl
                id="product-modal-location"
                name="location"
                onChange={onChange}
                value={product.location}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Quantity</FormLabel>
              <FormControl
              type="number"
                id="product-modal-quantity"
                name="quantity"
                onChange={onChange}
                value={product.quantity}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProductModal;
