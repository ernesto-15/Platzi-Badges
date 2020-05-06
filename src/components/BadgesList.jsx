import React, { useState, useMemo } from 'react';
import Gravatar from './Gravatar';
import twitterIcon from '../images/twitter.png';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

const BadgesList = ({ badges }) => {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilteredBadges] = useState(badges);

  const hanndleChange = (event) => {
    setQuery(event.target.value);
  };

  useMemo(() => {
    const result = badges.filter((badge) =>
      `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredBadges(result)
  }, [badges, query]);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="badge">Filter Badges</label>
          <input
            type="text"
            name="badge"
            id="badge"
            className="form-control"
            value={query}
            onChange={hanndleChange}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new badge
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="badge">Filter Badges</label>
        <input
          type="text"
          name="badge"
          id="badge"
          className="form-control"
          value={query}
          onChange={hanndleChange}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => (
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
    </>
  );
};

export default BadgesList;
