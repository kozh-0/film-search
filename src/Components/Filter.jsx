import React from "react"

export default function Filter(props) {
    return (
        <div className="filter_radio">
            <label>
                <input name="filter" type="radio" value="" onChange={props.handler}/>
                <span>All</span>
            </label>
            <label>
                <input name="filter" type="radio" value="movie" onChange={props.handler}/>
                <span>Movies only</span>
            </label>
            <label>
                <input name="filter" type="radio" value="series" onChange={props.handler}/>
                <span>Series only</span>
            </label>
            <label>
                <input name="filter" type="radio" value="game" onChange={props.handler}/>
                <span>Games</span>
            </label>
        </div>
    )
}