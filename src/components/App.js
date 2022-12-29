import '../App.css';
import React, {useState, useEffect} from 'react';
import MainContent from './MainContent';
import TestRoute from './TestRoute';
import AddNeed from './AddNeed';
import { Route, Switch } from "react-router-dom";

function App() {

  const [needs, setNeeds] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/needs")
      .then((r) => r.json())
      .then((data) => setNeeds(data));
  }, []);

  function updateNeeds(newNeed) {

    setNeeds(...needs, newNeed)
    
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/addneed">
          <AddNeed updateNeeds={updateNeeds}/>
        </Route>
        <Route exact path="/testroute">
          <TestRoute />
        </Route>
        <Route exact path="/">
      <MainContent needs={needs}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
