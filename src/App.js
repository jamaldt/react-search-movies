import './App.css';
import React, { Component } from 'react';
import {Title} from './components/title';
import {MoviesList} from './components/MoviesList';
import {SearchForm} from './components/SearchForm';
import 'bulma/css/bulma.min.css'



class App extends Component {
  state = {results:[]}

  _handleResults=(results)=>{
    this.setState({results})
  }

  render(){
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-Wrapper'>
        <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.results.length === 0 
        ? <p>Sin resultados</p>
        : <MoviesList movies={this.state.results}/>
        }
      </div>
    );
  }
}

export default App;
