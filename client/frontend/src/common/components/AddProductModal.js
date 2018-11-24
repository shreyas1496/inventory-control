import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

export const AddProductModalTypes = {
    UPDATE: 'UPDATE',
    ADD: 'ADD'
}

class AddProductModal extends React.Component {
    state = {
        product: {
            name: '',
            ...this.props.product
        }
    }

    handleChange = e => {
        const { id, value } = e.target
        this.setState({
            product: {
                ...this.state.product,
                [id]: value
            }
        })
    }

    render() {

        const { product } = this.state;
        return (
            <Modal show={showSellModal} onHide={this.hideModal}>
                <Modal.Header>Sell</Modal.Header>
                <form>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                id='name'
                                type="text"
                                disabled="true"
                                onChange={this.handleChange}
                                value={product.name}
                            />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => this.sellProduct(this.quantityRef.current.value, this.priceRef.current.value)}>Sell</button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

AddProductModal.propTypes = {
    product: PropTypes.object,
    type: PropTypes.oneOfType(AddProductModalTypes)
};

AddProductModal.defaultProps = {
    product: {},
    type: AddProductModalTypes.ADD
}

export default AddProductModal;
