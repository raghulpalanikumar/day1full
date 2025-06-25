import React, { useEffect, useState } from 'react';

const Effect2 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {user.map((data) => (
          <li key={data.id}>
            <h3>{data.name}</h3>
            <p>Email: {data.email}</p>
            <p>Latitude: {data.address.geo.lat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Effect2;
