import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function DisplayMovie({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = () => {
        dispatch({type: 'IMDB_GET', payload: movie.imdbID});
        history.push('/form');
    }


    return (
                <div>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title}/>
                    <button onClick={handleClick}>Add Movie</button>
                 </div>
            );   


}


export default DisplayMovie;
