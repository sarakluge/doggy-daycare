import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import DogList from './components/DogList';
import DogInfo from './components/DogInfo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const WELCOME = 'welcome', DOGLIST = 'dog-list', DOGINFO = 'dog-info';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/dog-list">
              <DogList />
            </Route>
            <Route path="/dog-info">
              <DogInfo />
            </Route>
          </Switch>
        </Router>
      </main>
      
    </div>
  );
}

export default App;
