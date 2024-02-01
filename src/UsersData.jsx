import React, { useState, useEffect } from 'react';

const Users = ({ userData }) => {
  const [state, setState] = useState(userData);

  useEffect(() => {
    const storage = localStorage.getItem("data");
    if (storage) {
      const parsedData = JSON.parse(storage);
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        setState(parsedData);
      }
    }
  }, [state]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <h2>User Data</h2>
      <ul>
        {state.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
