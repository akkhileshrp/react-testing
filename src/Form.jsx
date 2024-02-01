import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ addUserData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.value]: e.target.value }
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
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
