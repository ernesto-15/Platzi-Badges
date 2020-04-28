import React from 'react';
import twitterIcon from '../images/twitter.png';
import './styles/BadgesList.css';

const BadgesList = ({ badges }) => {
  return (
    <ul className="list-unstyled">
      {badges.map((badge) => (
        <li
          className="badge-item container-fluid align-items-center"
          key={badge.id}
        >
          <div className="badges-item__container">
            <div className="badge-item__avatar">
              <img src={badge.avatarUrl} alt="avatar" />
            </div>
            <div className="badge-item__data">
              <h3>{badge.firstName}</h3>
              <p className="twitter-icon">
                <img src={twitterIcon} className="badge-item__data-icon" alt="twitter" /> @
                {badge.twitter}
              </p>
              <p>{badge.jobTitle}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
