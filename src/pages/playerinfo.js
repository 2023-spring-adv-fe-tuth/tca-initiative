import React from 'react';
import logo from '../d20.png'
import { Form } from '../components/Navbar.In/form';
  
const PlayerInfo = () => {
  return (
    <div class="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Enter Player Information</h1>

        <Form/>
    
  </div>
  );
};
  
export default PlayerInfo;