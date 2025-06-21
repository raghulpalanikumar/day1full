import React from 'react';
import Contact from './Contact';
import image from '../assets/1.webp'
const Home = ({ userName }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <Contact userName={userName} />
      <img src={image} height="300" width="300" alt="My Image" />
      <img src="https://wallpaperaccess.com/full/4723250.jpg" height="300" width="300" alt="Wallpaper" />
    </div>
  );
};

export default Home;
