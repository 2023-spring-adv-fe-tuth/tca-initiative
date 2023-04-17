import React from 'react';
import './App.css';
import Navbar from './components/Navbar.In/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Conditions from './pages/conditions';
import PlayerInfo from './pages/playerinfo';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/conditions' element={<Conditions/>} />
        <Route path='/playerinfo' element={<PlayerInfo/>} />
    </Routes>
    </Router>
);
}
  
export default App;