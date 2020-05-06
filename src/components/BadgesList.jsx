import React from 'react';
import Gravatar from './Gravatar';
import twitterIcon from '../images/twitter.png';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

const BadgesList = ({ badges }) => {
  if (badges.length === 0) {
    return (
      <div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new badge
        </Link>
      </div>
    );
  }

  return (
    <ul className="list-unstyled">
      {badges.map((badge) => (
        <li
          className="badge-item container-fluid align-items-center"
          key={badge.id}
        >
          <Link
            className="text-reset text-decoration-none"
            to={`/badges/${badge.id}`}
          >
            <div className="badges-item__container">
              <div className="badge-item__avatar">
                <Gravatar email={badge.email} />
              </div>
              <div className="badge-item__data">
                <h3>{badge.firstName}</h3>
                <p className="twitter-icon">
                  <img
                    src={twitterIcon}
                    className="badge-item__data-icon"
                    alt="twitter"
                  />{' '}
                  @{badge.twitter}
                </p>
                <p>{badge.jobTitle}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
