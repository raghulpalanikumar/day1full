import React from 'react'

const Home = ({ items, users }) => {
  return (
    <div>
      <ol>
        {items.map((frui) => ( 
            <li>{frui}</li>
        ))}
      </ol>
      
      {users.map((user) => (
        <h1>
          {user.name}
          <br />
          {user.p || user.phnNum}
        </h1>
      ))}
    </div>
  )
}

export default Home;
