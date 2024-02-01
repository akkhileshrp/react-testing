import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Forms from './Form';
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
        <Route path="/forms" element={<Forms addUserData={addUserData} />} />
        <Route path="/users" element={<UsersData userData={userData} />} />
      </Routes>
    </div>
  );
};

export default App;
