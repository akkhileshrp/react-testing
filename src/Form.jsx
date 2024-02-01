import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ addUserData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserData(formData);
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
      </label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <label>
        Email:
      </label>
      <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
