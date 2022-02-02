export default function Pages(props) {
    const {plus, minus, page, handler, search, toDigits} = props;
    return (
        <div className="page">
            <div className="filter_pages">
                <button onClick={plus} className="btn-floating"><i className="material-icons">+</i></button>
                    <span> page: {page} </span>
                <button onClick={minus} className="btn-floating"><i className="material-icons">-</i></button>
            </div>
            <span>Or input</span>
            <input 
                className="page_input"
                type="text" 
                name="page" 
                value={page} 
                onChange={toDigits} 
                onBlur={handler}
                onKeyDown={(e) => {if(e.key === "Enter") search()}}
            />
        </div>
    )
}