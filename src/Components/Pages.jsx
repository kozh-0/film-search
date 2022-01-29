export default function Pages(props) {
    return (
        <div className="filter_pages">
            <button onClick={props.plus} className="btn-floating"><i className="material-icons">+</i></button>
                <span> page: {props.page} </span>
            <button onClick={props.minus} className="btn-floating"><i className="material-icons">-</i></button>
        </div>
    )
}