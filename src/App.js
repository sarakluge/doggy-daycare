import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import DogList from './components/DogList';
import DogInfo from './components/DogInfo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [listItem, setListItem] = useState(null)

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
              <DogList setDog = {setListItem}/>
            </Route>
            <Route path="/dog-info">
              <DogInfo dog = {listItem} />
            </Route>
          </Switch>
        </Router>
      </main>
      
    </div>
  );
}

export default App;
