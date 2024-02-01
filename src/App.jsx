import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import UsersData from './UsersData';

const App = () => {
  const [userData, setUserData] = useState([]);

  const addUserData = (newUserData) => {
    setUserData((prevData) => [...prevData, newUserData]);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/forms">Add New User</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/forms" element={<Form addUserData={addUserData} />} />
        <Route path="/users" element={<UsersData userData={userData} />} />
      </Routes>
    </div>
  );
};

export default App;
