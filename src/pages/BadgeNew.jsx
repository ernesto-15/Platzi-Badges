import React, { useState } from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Loading from '../components/Loading';
import header from '../images/platziconf-logo.svg';
import api from '../api';
import './styles/BadgeNew.css';

const BadgeNew = (props) => {
  const [formData, SetFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.badges.create(formData);
      setLoading(false);
      props.history.push('/badges')
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <Badge
              firstName={formData.firstName || 'First Name'}
              lastName={formData.lastName || 'Last Name'}
              jobTitle={formData.jobTitle || 'Job Title'}
              twitter={formData.twitter || 'Twitter'}
              email={formData.email || 'Email'}
            />
          </div>
          <div className="col-12 col-md-6">
            <BadgeForm
              formValues={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
