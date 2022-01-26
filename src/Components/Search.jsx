export default function Search(props) {
    return(
        <>
            <div className="main-input">
                <input 
                    type="search" 
                    value={props.input} 
                    placeholder="Search"
                    onChange={props.handler}
                    onKeyDown={(e) => {if (e.key === 'Enter') props.search()}}
                />
                <button 
                    className="btn waves-effect waves-light" 
                    onClick={props.search}
                >Search</button>
            </div>

            <div>
                <button onClick={props.plus} className="btn-floating"><i className="material-icons">+</i></button>
                    <span> page: {props.page} </span>
                <button onClick={props.minus} className="btn-floating"><i className="material-icons">-</i></button>
            </div> 
        </>

    )
}