import './App.css';
import Dashboard from './Dashboard.js';
import React from 'react';


function App() {
  const [data, setData] = React.useState(null);



  return (
    <div className="App">
      <div className="App-body">
        <button onClick={() => fetch("/save")
      .then((res) => res.json())
      .then((data) => {console.log("called save"); setData(data.message);})}>
        test upload
        </button>
        <button onClick={() => fetch("/load")
      .then((res) => res.json())
      .then((data) => {console.log("called load"); setData(data.message);})}>
        test load
        </button>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
