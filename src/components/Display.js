import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { total, operation, next } = props;
  return (
    <div className="screen">{next || operation || total || 0}</div>

  );
}

Display.defaultProps = {
  total: 0,
  operation: null,
  next: null,
};

Display.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.func,
  next: PropTypes.string,
};
