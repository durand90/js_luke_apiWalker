import React, { useState } from 'react';
// import './App.css';

//import Fetch from './components/Fetch';
import Input from './components/Input';
import People from './components/People';
import Planets from './components/Planets';

import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';





function App() {

  


  return (
    <BrowserRouter>
      <Input />
      <hr />
      <Switch>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planets/:id">
          <Planets/>
        </Route>
        <hr/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
