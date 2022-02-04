import React, {useState, useEffect} from "react";
import Movie from "./Movie";
import Preloader from "./Preloader";
import Search from "./Search";
import Filter from "./Filter";
import Pages from "./Pages";

const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [input, setInput] = useState('Man');
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);


    const plus = () => { setPage(page + 1) }
    const minus = () => { setPage(page - 1) }

    const handleSetPage = (e) => { setPage(parseInt(e.target.value.replace(/\D/g, ''))) }
    const handleSetFilter = (e) => { setFilter(e.target.value) }

    
    const search = () => {
        if (input) {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${input}&page=${page}&type=${filter}`)
                .then(response => response.json())
                .then(item => {
                    setMovies(item.Search);
                    setTotal(item.totalResults);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Man&page=1`)
            .then(response => response.json())
            .then(item => {
                setMovies(item.Search);
                setTotal(item.totalResults);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <Search 
                input={input} 
                setInput={setInput} 
                search={search} 
            />
            <span>Total: {total}, Pages: {total ? Math.round(total/10) : 0}</span>
            <div className="filter">
                <Pages 
                    page={page} 
                    plus={plus}
                    minus={minus}
                    handleSetPage={handleSetPage}
                    search={search}
                />
                <Filter
                    handleSetFilter={handleSetFilter}
                    filter={filter}
                />
            </div>
            <section className="content">
                {loading ? <Preloader/> : <Movie movies={movies}/>}
            </section>
        </div>
    )
}

export default Movies;