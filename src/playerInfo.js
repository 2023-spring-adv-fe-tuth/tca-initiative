import './App.css';
import logo from './d20.png';

function PlayerInfo() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>PLAYER INFO</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <a href="./playerInfo.js">
          <button class="Styled-button">Enter Player Info</button>
          </a>
        </header>
      </div>
    );
  }
  
  export default PlayerInfo;