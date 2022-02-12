import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail'


import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { usedSearch: false, results: [] }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:id' component={Detail}/>
        </Switch>
      </div>
    );
  }
}

export default App;