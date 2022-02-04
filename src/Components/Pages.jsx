export default function Pages({plus, minus, page, handleSetPage, search}) {
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
                onChange={handleSetPage}
                onKeyDown={(e) => {if(e.key === "Enter") search()}}
            />
        </div>
    )
}