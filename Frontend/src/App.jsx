import { useState } from 'react'
import {Routes, Route} from "react-router-dom";

import spinningGears from './images/spinningGears.gif'
import background from './images/background.png'
import logo from './images/logo.jpeg'

import './App.css'

import Home from './Components/Home';
import Past from './Components/Past';
import Present from './Components/Present';
import Future from './Components/Future';

function App() {

  

return (
  <div>
      <header>
        <img src = {logo} height = "200" width = "200" />
        <h1>Steampunk Era Timeline</h1>
       </header>


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
