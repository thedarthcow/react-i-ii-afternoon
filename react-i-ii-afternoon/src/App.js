import React from 'react';
import './App.css';
import Header from './header.js'
import Body from './body.js'

function App() {
  return (
    <div className="App">
      <Header /> {/* Looks very similar to HTML, this is JSX */}
      <Body />
    </div>
  );
}

export default App;
