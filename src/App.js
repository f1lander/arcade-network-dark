import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css'
import  ActionTopBar  from './components/actionTopBar/actionTopBar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionTopBar></ActionTopBar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
