import React from 'react';

const Users = ({ userData }) => {
  return (
    <div>
      <h2>User Data</h2>
      <ul>
        {userData.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, Email: {user.email}
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
};

export default Users;
