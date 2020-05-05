import React, { useState, useEffect } from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Loading from '../components/Loading';
import header from '../images/platziconf-logo.svg';
import api from '../api';
import './styles/BadgeEdit.css';

const BadgeEdit = (props) => {
  const [formData, SetFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.badges.read(props.match.params.badgeId);
      SetFormData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      await api.badges.update(props.match.params.badgeId, formData);
      setLoading(false);
      props.history.push('/badges');
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
      <div className="BadgeEdit__hero">
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
            <h1>Edit Attendant</h1>
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

export default BadgeEdit;
