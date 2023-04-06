import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import logo from './d20.png';
import './App.css';
import Home from './components/Home';
import Conditions from './components/Conditions';
import Initiative from './components/Initiative';
import Players from './components/Players';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Routes>
             <Route path="/" component={Home} exact/>
             <Route path="/Conditions" component={Conditions}/>
             <Route path="/Initiative" component={Initiative}/>
             <Route path="/Players" component={Players}/>
            <Route component={Error}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
