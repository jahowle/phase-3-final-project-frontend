import '../App.css';
import React, {useState, useEffect} from 'react';
import MainContent from './MainContent';

function App() {

  const [needs, setNeeds] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/needs")
      .then((r) => r.json())
      .then((data) => setNeeds(data));
  }, []);

  return (
    <div className="App">
      <MainContent needs={needs}/>
    </div>
  );
}

export default App;
