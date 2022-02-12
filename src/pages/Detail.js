import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '25c9dd1a';

export class Detail extends Component{
    static propTypes ={
        id : PropTypes.string
    }

    state = {movie : {}}
    
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log(movie)
            this.setState({movie})
            //const {Search=[],totalResult="0"} = movie
            //console.log({Search,totalResult})
            //this.props.onResults(Search)
        })   
    }

    _goBack(){
        window.history.back()
    }

    componentDidMount(){
        console.log(this.props)
        const {id} = this.props
        this._fetchMovie({id})
    }

    render(){
        const {Title,Poster,Actors,Awards,Metascore,Plot}= this.state.movie
        return(
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster} alt='poster'/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <p>{Awards}</p>
            </div>
            
        )
    }
}