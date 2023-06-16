import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function DisplayMovie({movie}) {

    // const dispatch = useDispatch();
    // const history = useHistory();
   
    return (
                <div>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title}/>
                 </div>
            );   


}


export default DisplayMovie;
