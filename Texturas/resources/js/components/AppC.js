import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Rutas from "./routes/Rutas";
import Notification from './utils/Notification';
import Pages from "./pages/Index"
import Services from "./services/Index"



const App = () => {


  return (
    <div className="App">
          <Rutas />
    </div>
  )
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}