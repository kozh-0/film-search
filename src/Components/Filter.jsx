import React from "react"

export default function Filter(props) {
    const {handler, filter} = props;
    return (
        <div className="filter_radio">
            <label>
                <input name="filter" type="radio" value="" onChange={handler} checked={filter === ''}/>
                <span>All</span>
            </label>
            <label>
                <input name="filter" type="radio" value="movie" onChange={handler} checked={filter === 'movie'}/>
                <span>Movies</span>
            </label>
            <label>
                <input name="filter" type="radio" value="series" onChange={handler} checked={filter === 'series'}/>
                <span>Series</span>
            </label>
            <label>
                <input name="filter" type="radio" value="game" onChange={handler} checked={filter === 'game'}/>
                <span>Games</span>
            </label>
        </div>
    )
}