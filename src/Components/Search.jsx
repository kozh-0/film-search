export default function Search(props) {
    return(
        <>
            <div className="main-input">
                <input 
                    type="search" 
                    name="input"
                    value={props.input} 
                    placeholder="Search"
                    onChange={props.handler}
                    onKeyDown={(e) => {if (e.key === 'Enter') props.search()}}
                />
                <button 
                    className="btn waves-effect waves-light" 
                    onClick={props.search}>
                    Search
                </button>
            </div>
        </>

    )
}