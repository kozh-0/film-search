import React from "react"

export default function Filter({handleSetFilter, filter}) {
    return (
        <div className="filter_radio">
            <label>
                <input name="filter" type="radio" value="" onChange={handleSetFilter} checked={filter === ''}/>
                <span>All</span>
            </label>
            <label>
                <input name="filter" type="radio" value="movie" onChange={handleSetFilter} checked={filter === 'movie'}/>
                <span>Movies</span>
            </label>
            <label>
                <input name="filter" type="radio" value="series" onChange={handleSetFilter} checked={filter === 'series'}/>
                <span>Series</span>
            </label>
            <label>
                <input name="filter" type="radio" value="game" onChange={handleSetFilter} checked={filter === 'game'}/>
                <span>Games</span>
            </label>
        </div>
    )
}