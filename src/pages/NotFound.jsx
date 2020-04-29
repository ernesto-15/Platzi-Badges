import React from 'react';
import { Link } from 'react-router-dom';
import notImage from '../images/notfound.svg';
import './styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="container NotFound__container">
        <img src={notImage} alt="404" />
        <div className="NotFound__info">
          <h2>PAGE NOT FOUND</h2>
          <Link className="btn btn-primary NotFound__button" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
