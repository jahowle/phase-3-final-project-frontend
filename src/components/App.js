import '../App.css';
import React, {useState, useEffect} from 'react';
import MainContent from './MainContent';

function App() {

  const [needs, setNeeds] = useState([])

  return (
    <div className="App">
      <MainContent />
    </div>
  );
}

export default App;
