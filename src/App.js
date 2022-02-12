import './App.css';
import React, { Component } from 'react';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import 'bulma/css/bulma.min.css'




class App extends Component {
  state = {usedSearch:false,results:[]}


  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if(hasId){
      return <Detail id={url.searchParams.get('id')}/>
    }
    
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
