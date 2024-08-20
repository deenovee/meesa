import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Profile />
        <Links />
      </div>
      <div className="main-content">
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
