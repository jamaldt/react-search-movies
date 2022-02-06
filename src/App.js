import './App.css';
import React, { Component } from 'react';
import {Title} from './components/title';
import {Movie} from './components/Movie';
import {SearchForm} from './components/SearchForm';
import 'bulma/css/bulma.min.css'



class App extends Component {
  state = {results:[]}

  _handleResults=(results)=>{
    this.setState({results})
  }

  _renderResults(){
    const {results} = this.state
    return results.map(movie => {
      return(
         <Movie 
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}/>
      )
      
      //return <p key={movie.imdbID}>{movie.Title}</p>
    })
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
        : this._renderResults()}
      </div>
    );
  }
}

export default App;
