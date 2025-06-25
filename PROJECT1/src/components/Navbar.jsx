import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/home" className="Link">Home</Link>
      <Link to="/about" className="Link">About</Link>
      <Link to="/contact" className="Link">Contact</Link>
      <Link to="/counter" className="Link">Counter</Link>
       <Link to="/hooks" className="Link">Hooks</Link>
       <Link to="/login" className="Link">LOGIN</Link>
       <Link to="/todo" className="Link">Todo</Link>
    </nav>
  );
}

export default Navbar;
