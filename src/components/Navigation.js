

import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Conditions</NavLink>
          <NavLink to="/contact">Initiative</NavLink>
          <NavLink to="/contact">Players</NavLink>
       </div>
    );
}
 
export default Navigation;

