import MovieDetails from "./MovieDetails/MovieDetails";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({type: "SET_DETAILS", payload: {movie: movie}});
        history.push("/details");

    }

             return (
                <div>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title}/>
                <button onClick={handleClick}>Details</button> 
                 </div>
            );   


}


export default MovieItem;
