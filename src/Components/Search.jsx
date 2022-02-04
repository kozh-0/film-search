export default function Search({input, setInput, search}) {
    return(
        <div className="main-input">
            <input 
                type="search" 
                name="input"
                value={input} 
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {if (e.key === 'Enter') search()}}
            />
            <button 
                className="btn waves-effect waves-light" 
                onClick={search}>
                Search
            </button>
        </div>
    )
}