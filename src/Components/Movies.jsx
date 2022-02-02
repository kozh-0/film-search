import React, {Component} from "react";
import Movie from "./Movie";
import Preloader from "./Preloader";
import Search from "./Search";
import Filter from "./Filter";
import Pages from "./Pages";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            input: '',
            page: 1,
            filter: '',
            loading: true,
            total: 0,
        }
    }

    plus = () => { this.setState({page: this.state.page + 1}) }
    minus = () => { this.setState({page: this.state.page - 1}) }
    handler = (e) => { this.setState({[e.target.name]: e.target.value}) }
    toDigits = (e) => { this.setState({page: e.target.value.replace(/\D/g, '')})}

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page=1`)
            .then(response => response.json())
            .then(item => this.setState({movies: item.Search, total: item.totalResults, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
            });
    }
    search = () => {
        const {input, page, filter} = this.state;
        if (input) {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${input}&page=${page}&type=${filter}`)
                .then(response => response.json())
                .then(item => this.setState({movies: item.Search, total: item.totalResults, loading: false}))
                .catch((err) => {
                    console.error(err);
                    this.setState({loading: false});
                });
        }
    }

    render() {
        const {movies, input, page, filter, loading, total} = this.state;
        return (
            <>
                <Search 
                    input={input} 
                    handler={this.handler} 
                    search={this.search} 
                />
                <span>Total: {total}, Pages: {total ? Math.round(total/10) : 0}</span>
                <div className="filter">
                    <Pages 
                        page={page} 
                        plus={this.plus}
                        minus={this.minus}
                        handler={this.handler}
                        search={this.search}
                        toDigits={this.toDigits}
                    />
                    <Filter
                        handler={this.handler}
                        filter={filter}
                        search={this.search}
                    />
                </div>
                <section className="content">
                    {loading ? <Preloader/> : <Movie movies={movies}/>}
                </section>
            </>
        )
    }
}