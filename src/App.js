import './App.css';
import React, { Component } from 'react';
import {Title} from './components/title';
import {MoviesList} from './components/MoviesList';
import {SearchForm} from './components/SearchForm';
import { Detail } from './pages/Detail';
import 'bulma/css/bulma.min.css'




class App extends Component {
  state = {usedSearch:false,results:[]}

  _handleResults=(results)=>{
    this.setState({results,usedSearch:true})
  }

  _renderResult(){
    return typeof this.state.results.length === undefined 
          ? <p>Sorry!! </p>
          : <MoviesList movies={this.state.results}/>
      
  }

  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if(hasId){
      return <Detail/>
    }
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-Wrapper'>
        <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.usedSearch
        ?this._renderResult()
        :<small>Usa el formulario para buscar una peli</small>}
        
      </div>
    );
  }
}

export default App;
