import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BRoute from './Router/Route';


function App() {
  return (
    <div>
        <Router>
          <BRoute />
        </Router>
    </div>
  );
}

export default App;
