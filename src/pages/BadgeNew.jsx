import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

const BadgeNew = () => {

  const [formData, SetFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  })

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <NavBar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <Badge
              firstName={formData.firstName}
              lastName={formData.lastName}
              jobTitle={formData.jobTitle}
              twitter={formData.twitter}
              email={formData.email}
              avatarUrl="https://images.pexels.com/photos/1735658/pexels-photo-1735658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
          <div className="col-12 col-md-6">
            <BadgeForm formValues={formData} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeNew;
