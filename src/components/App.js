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
  }, [needs]);

  function updateNeeds(newNeed) {

    console.log(newNeed)
    
  }

  function handleDelete(deletedNeed) {
    const updatedNeeds = needs.filter((need) => need.id !== deletedNeed.id)
    setNeeds(updatedNeeds)
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/addneed">
          <AddNeed updateNeeds={updateNeeds}/>
        </Route>
        <Route exact path="/">
      <MainContent needs={needs} handleDelete={handleDelete}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
