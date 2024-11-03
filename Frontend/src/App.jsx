import React from 'react';
import Victorian from './components/Victorian';
import DieselPunk from './components/DieselPunk';
import AtomicPunk from './components/AtomicPunk';
import './App.css';

function App() {
  return (
    <div className="timeline">
      <h1>Steampunk Era Timeline</h1>
      <div className="timeline-navigation">
        <button onClick={() => document.getElementById('victorian').scrollIntoView()}>Victorian</button>
        <button onClick={() => document.getElementById('dieselpunk').scrollIntoView()}>DieselPunk</button>
        <button onClick={() => document.getElementById('atomicpunk').scrollIntoView()}>AtomicPunk</button>
      </div>
      <div className="timeline-content">
        <section id="victorian"><Victorian /></section>
        <section id="dieselpunk"><DieselPunk /></section>
        <section id="atomicpunk"><AtomicPunk /></section>
      </div>
    </div>
  );
}

export default App;
