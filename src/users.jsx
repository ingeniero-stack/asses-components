import React from 'react';


const users = [
  { name: 'KELVIN', id: 1, career: 'Engineer ' },
  { name: 'INGENIERO', id: 2, career: 'banker' },
  { name: 'MAGEMA', id: 3, career: 'analyst' },
];

const Users = () => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        Name: {user.name}
        <br />
        Career: {user.career}
      </li>
    ))}
  </ul>
);

export default Users;
