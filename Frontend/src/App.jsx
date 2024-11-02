import { useState } from 'react'
import {Routes, Route} from "react-router-dom";

import spinningGears from './images/spinningGears.gif'
import background from './images/background.png'
import logo from './images/logo.gif'

import './App.css'

import Home from './Components/Home';
import Past from './Components/Past';
import Present from './Components/Present';
import Future from './Components/Future';

function App() {

  

return (
  <div>
      <header>
        <img src = {logo} height = "200" width = "300" />
        <h2>Steampunk Era Timeline</h2>
       </header>

       <div style={{ position: 'fixed', left: 0, overflow: 'hidden', backgroundSize: 'cover' }}>
        <img 
          src={spinningGears} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Spinning Gears Left"
        />
        
        </div>
        

      <div style={{ position: 'fixed', right: 0, overflow: 'hidden', backgroundSize: 'cover' }}>
      <img 
        src={spinningGears} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        alt="Spinning Gears Right"
      />
      </div>

       <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/timeline/past' element = {<Past />} />
          <Route path = '/timeline/present' element = {<Present />} />
          <Route path = '/timeline/future' element = {<Future />} />
       </Routes>
    </div>   
   
  )
}

export default App
