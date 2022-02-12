import React, { Component } from 'react';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { usedSearch: false, results: [] }

  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
        ? <Detail id={url.searchParams.get('id')}/>
        : <Home/>
    
    return (
      <div className="App">
        {Page}
      </div>
    );
  }
}

export default App;