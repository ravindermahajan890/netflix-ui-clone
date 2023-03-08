import { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>TAMASHFLIX</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          Count is {count}
        </button>
      </div>
      <Button variant="contained" color="success" onClick={() => setCount(0)}>
        Reset the count
      </Button>
      <p className="read-the-docs">Basic homepage for TAMASHFLIX</p>
    </div>
  );
};

export default App;
