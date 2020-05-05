import React from 'react';
import './styles/Error.css';

const Error = ({ error }) => {
  return <div className="PageError"> <span role="img" aria-label="jeje">💔</span> {error.message}</div>;
};

export default Error;
