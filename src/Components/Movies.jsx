import React, {Component} from "react";
import Movie from "./Movie";
import Preloader from "./Preloader";
import Search from "./Search";
import Filter from "./Filter";
import Pages from "./Pages";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            input: '',
            page: 1,
            filter: '',
        }
    }

    plus = () => { this.setState({page: this.state.page + 1}) }
    minus = () => { this.setState({page: this.state.page - 1}) }
    handler = (e) => { this.setState({[e.target.name]: e.target.value}) }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=1ed0a52d&s=matrix&page=1`)
                .then(response => response.json())
                .then(item => this.setState({movies: item.Search}));
    }
    search = () => {
        const {input, page, filter} = this.state;
        if (input.length > 2) {
            fetch(`http://www.omdbapi.com/?apikey=1ed0a52d&s=${input}&page=${page}&type=${filter}`)
                .then(response => response.json())
                .then(item => this.setState({movies: item.Search}));
        }
    }

    render() {
        const {movies, input, page, filter} = this.state;
        return (
            <>
                <Search 
                    input={input} 
                    handler={this.handler} 
                    search={this.search} 
                />
                <div className="filter">
                    <Pages 
                        page={page} 
                        plus={this.plus}
                        minus={this.minus}
                    />
                    <Filter
                        handler={this.handler}
                        filter={filter}
                        search={this.search}
                    />
                </div>
                <section className="content">
                    {movies.length ? (
                    <Movie movies={movies}/>
                    ) : <Preloader/>}
                </section>
            </>
        )
    }
}