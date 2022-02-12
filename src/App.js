import './App.css';
import React, { Component } from 'react';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import 'bulma/css/bulma.min.css'




class App extends Component {
  state = {usedSearch:false,results:[]}


  render(){
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
        ?  <Detail id={url.searchParams.get('id')}/>
        :   <Home/>
  
    return (
      <div className="App">
        {Page}
      </div>
    );
  }
}

export default App;
