import React, { useState, useEffect } from 'react';
import confLofo from '../images/platziconf-logo.svg';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Badge from '../components/Badge';
import api from '../api';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';

const BadgeDetails = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.badges.read(props.match.params.badgeId);
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading && !data) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLofo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {data.firstName} {data.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={data.firstName}
              lastName={data.lastName}
              jobTitle={data.jobTitle}
              twitter={data.twitter}
              email={data.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link className="btn btn-warning mb-4" to={`/badges/${data.id}/edit`}>Edit</Link>
              </div>
              <div>
                <button className="btn btn-danger" to={`/badges/${data.id}/edit`}>Delete</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetails;
