import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, handler, styleClass } = props;
  return (
    <button
      type="button"
      className={styleClass}
      onClick={(event) => handler(event)}
      name={value}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  styleClass: PropTypes.string.isRequired,
};
