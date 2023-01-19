import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      path: '/quotes',
    },
  ];

  return (
    <nav className="NavItems flex">
      <h3>Math Magicians</h3>
      <ul>
        {navLinks.map(({ id, name, path }) => (
          <li key={id}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
