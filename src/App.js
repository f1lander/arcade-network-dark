import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css'
import ActionTopBar  from './components/actionTopBar/actionTopBar'
import NavBar from './components/navBar/navBar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionTopBar></ActionTopBar>
        <NavBar></NavBar>
      </header>
    </div>
  );
}

export default App;
