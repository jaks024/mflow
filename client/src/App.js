import './App.css';
import Dashboard from './Dashboard.js';
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <Dashboard
          appName={!data ? "Loading..." : data}/>
      </div>
    </div>
  );
}

export default App;
