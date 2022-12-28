import '../App.css';
import React, {useState, useEffect} from 'react';
import MainContent from './MainContent';
import AddNeed from './AddNeed';
import { Route, Switch } from "react-router-dom";

function App() {

  const [needs, setNeeds] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/needs")
      .then((r) => r.json())
      .then((data) => setNeeds(data));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/addneed">
          <AddNeed />
        </Route>
        <Route exact path="/">
      <MainContent needs={needs}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
