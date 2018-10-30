import React from 'react';
import PropTypes from 'prop-types';

const inputRef = React.createRef();
const Counter = ({ onClick, max }) => (
  <form
    onSubmit={(event) => {
      if (inputRef.current.value <= max) {
        event.preventDefault();
        onClick(inputRef.current.value);
      }
    }}
  >
    <input type="number" ref={inputRef} max={max} min={1} />
    <button type="submit">Add</button>
  </form>
);

Counter.propTypes = {
  max: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Counter;
