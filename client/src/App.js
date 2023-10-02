import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PersonForm from './components/PersonForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/api/people' pass  PersonForm></Route>
      </Routes>
    
    </div>
  );
}

export default App;
