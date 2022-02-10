import './App.css';
import React, { Component } from 'react';
import {Title} from './components/title';
import {MoviesList} from './components/MoviesList';
import {SearchForm} from './components/SearchForm';
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
