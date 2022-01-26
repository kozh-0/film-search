import React, {Component} from "react";
import Movie from "./Movie";
import Preloader from "./Preloader";
import Search from "./Search";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            input: '',
            page: 1,
        }
    }

    plus = () => {this.setState({page: this.state.page + 1})}
    minus = () => {this.setState({page: this.state.page - 1})}

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=1ed0a52d&s=matrix&page=1`)
                .then(response => response.json())
                .then(item => this.setState({movies: item.Search}));
    }
    search = () => {
        if (this.state.input.length > 2) {
            fetch(`http://www.omdbapi.com/?apikey=1ed0a52d&s=${this.state.input}&page=${this.state.page}`)
                .then(response => response.json())
                .then(item => this.setState({movies: item.Search}));
        }
    }

    handler = (event) => {
        this.setState({input: event.target.value})
    }

    render() {
        const {movies, input, page} = this.state;
        return (
            <>
                <Search 
                    input={input} 
                    handler={this.handler} 
                    search={this.search} 
                    page={page} 
                    plus={this.plus}
                    minus={this.minus}
                />
                <section className="content">
                    {movies.length ? (
                    <Movie movies={movies}/>
                    ) : <Preloader/>}
                </section>
            </>
        )
    }
}