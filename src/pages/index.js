import React from 'react';
import logo from '../d20.png'
  
const Home = () => {
  return (
    <div class="App-header">
      <h1>Welcome to TCA-Initiative!</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>A REACT Inititiave Tracker for Tabletop Role-Playing Games</p>

      <form action="/playerinfo">
      <button class="Styled-button">Get Started</button>
      </form>
    </div>
  );
};
  
export default Home;