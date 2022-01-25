import React, {Component} from "react";
import Movie from "./Movie";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            input: '',
        }
    }

    componentDidUpdate() {
        console.log('kek');
    }
    search = () => {
        if (this.state.input.length > 2) {
            fetch(`http://www.omdbapi.com/?apikey=1ed0a52d&s=${this.state.input}&`)
                .then(response => response.json())
                .then(item => this.setState({movies: item.Search}));
        }
        
    }
    handler = (event) => {
        this.setState({input: event.target.value})
    }

    render() {
        const {movies, input} = this.state;
        return (
            <>
                <div style={{display: 'flex'}}>
                    <input type="text" value={input} onChange={this.handler}/>
                    <button onClick={this.search}>Search</button>
                </div>
                <section className="content">
                    {movies.length ? (
                    <Movie movies={movies}/>
                    ) : <h3>Loading...</h3>}
                </section>
            </>
            
        )
    }
}