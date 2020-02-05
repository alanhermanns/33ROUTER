import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Character = ({ id, name, status, species }) => {

  return (
    <Link to={`/${id}`}>
      <p value={id}>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </Link>
  );
};

export default Character;
