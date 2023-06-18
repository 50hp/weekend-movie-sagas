import MovieDetails from "./MovieDetails/MovieDetails";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    //refactor button to use links instead of history
    const handleClick = () => {
        console.log(movie);
        history.push(`/details/${movie.id}`);

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
