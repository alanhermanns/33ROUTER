import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, status, species }) => {
  return (
    <ul>
      <li value={id}>{name}</li>
      <li>{status}</li>
      <li>{species}</li>
    </ul>
  );
};

export default Character;
