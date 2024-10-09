import React from 'react';

export default function Users({ users }) {
  return (
    <div>
      <h1>Admin: Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name.firstname} {user.name.lastname} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}