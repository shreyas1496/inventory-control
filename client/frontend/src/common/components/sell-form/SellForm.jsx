import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormControl, FormGroup, ControlLabel, Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './SellForm.css';

const SellForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup className="gap">
        <ControlLabel> Product Name</ControlLabel>
        <Field
          component={({ input, type, placeholder }) => (
            <FormControl
              type={type}
              placeholder={placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          )}
          name="name"
          placeholder="Product Name"
        />
      </FormGroup>

      <FormGroup className="gap">
        <ControlLabel>Company</ControlLabel>
        <Field
          component={({ input, type, placeholder }) => (
            <FormControl
              type={type}
              placeholder={placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          )}
          name="company"
          placeholder="Company"
        />
      </FormGroup>
      <FormGroup className="gap">
        <ControlLabel> Description</ControlLabel>
        <Field
          component={({ input, type, placeholder }) => (
            <FormControl
              type={type}
              placeholder={placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          )}
          name="description"
          placeholder="Description"
        />
      </FormGroup>
      <FormGroup className="gap">
        <ControlLabel> Usage</ControlLabel>
        <Field
          component={({ input, type, placeholder }) => (
            <FormControl
              type={type}
              placeholder={placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          )}
          name="usage"
          placeholder="Usage"
        />
      </FormGroup>
      <Button type="submit">Search</Button>
    </Form>
  );
};

SellForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'sell',
})(SellForm);
