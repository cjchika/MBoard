import React from 'react'
import Home from './components/Homepage/Home';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup'

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar/>
      <Signup />
    </div>
  );
}

export default App;
