
export default function Movie(props) {
    const {movies} = props;
    return(
        <>
            {movies ? (movies.map(item => {
                return (
                    <div className="card" key={item.imdbID}>
                        <div className="card-image">
                            {item.Poster === 'N/A' ? (
                                <img src={`https://via.placeholder.com/500x400.png?text=${item.Title}`} alt="item"/>
                                ) : <img src={item.Poster} alt="item"/>
                            }
                        </div>
            
                        <div className="card-info">
                            <span className="card-title">{item.Title}</span>
                            <div className="card-content">
                                <p>{item.Type}</p>
                                <p>{item.Year}</p>
                            </div>
                        </div>
                    </div>   
                )
            })) : <h4>Nothing found ¯\_(ツ)_/¯</h4>}
        </>    
    ) 
}