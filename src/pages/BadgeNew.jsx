import React from 'react';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import '../components/styles/BadgeNew.css';

const BadgeNew = () => {
  return (
    <div>
      <NavBar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName="Eernesto"
              lastName="Anguli"
              jobTitle="Frono"
              twitter="ernesto"
              avatarUrl="https://images.pexels.com/photos/1735658/pexels-photo-1735658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeNew;
