import React from "react"

export default function Filter({setFilter, filter}) {
    return (
        <div className="filter_radio">
            <label>
                <input name="filter" type="radio" value="" onChange={(e) => setFilter(e.target.value)} checked={filter === ''}/>
                <span>All</span>
            </label>
            <label>
                <input name="filter" type="radio" value="movie" onChange={(e) => setFilter(e.target.value)} checked={filter === 'movie'}/>
                <span>Movies</span>
            </label>
            <label>
                <input name="filter" type="radio" value="series" onChange={(e) => setFilter(e.target.value)} checked={filter === 'series'}/>
                <span>Series</span>
            </label>
            <label>
                <input name="filter" type="radio" value="game" onChange={(e) => setFilter(e.target.value)} checked={filter === 'game'}/>
                <span>Games</span>
            </label>
        </div>
    )
}