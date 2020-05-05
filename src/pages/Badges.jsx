import React, { useState, useEffect } from 'react';
import BadgesList from '../components/BadgesList';
import Loading from '../components/Loading';
import MiniLoader from '../components/MiniLoader';
import Error from '../components/Error';
import confLogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';
import api from '../api';
import './styles/Badges.css';

const Badges = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await api.badges.list();
      setData(data);
      setIsLoading(false);
      console.log('object');
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => {
      clearInterval(interval)
    };
  }, []);

  if (isLoading && !data) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img src={confLogo} alt="Conf Logo" className="Badges_conf-logo" />
          </div>
        </div>
      </div>

      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={data} />
            {isLoading && <MiniLoader />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Badges;
