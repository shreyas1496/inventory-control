import React from 'react';
import {
  FormControl, FormGroup, ControlLabel, Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './SellForm.css';

const SellForm = (props) => {
  const { values, onChange, searchProducts } = props;
  return (
    <Form inline>
      <FormGroup className="gap">
        <ControlLabel> Product Name</ControlLabel>
        <FormControl
          placeholder="Name"
          value={values.name}
          onChange={e => onChange('name', e.target.value)}
        />
      </FormGroup>

      <FormGroup className="gap">
        <ControlLabel>Company</ControlLabel>
        <FormControl
          placeholder="Company"
          value={values.company}
          onChange={e => onChange('company', e.target.value)}
        />
      </FormGroup>
      <FormGroup className="gap">
        <ControlLabel> Description</ControlLabel>
        <FormControl
          placeholder="Description"
          value={values.desciption}
          onChange={e => onChange('description', e.target.value)}
        />
      </FormGroup>
      <FormGroup className="gap">
        <ControlLabel> Usage</ControlLabel>
        <FormControl
          placeholder="Usage"
          value={values.usage}
          onChange={e => onChange('usage', e.target.value)}
        />
      </FormGroup>
      <Button
        onClick={(e) => {
          e.preventDefault();
          searchProducts();
        }}
        type="submit"
      >
        Search
      </Button>
    </Form>
  );
};

SellForm.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  searchProducts: PropTypes.func.isRequired,
};

export default SellForm;
