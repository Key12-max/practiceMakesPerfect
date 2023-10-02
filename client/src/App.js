import React, {useState}from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import './App.css';

function App(props) {
  //lifted state:Our getter and setter methods can be used in every child component to which they have been passed via props.

  return (
    <div className="App">
      <Routes>
      <Route path='/api/people' element = {<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
