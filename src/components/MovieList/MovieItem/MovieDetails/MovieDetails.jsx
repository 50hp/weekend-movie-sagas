import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails({}){

    const details = useSelector( store => store.currentDetails);
    const genres = useSelector( store => store.genres);
    const history = useHistory();

    const backButton = () => {
        history.push("/");

    }
   

    console.log(details);

    return(
<>
        
            <div>
                <img src={details.movie.poster}/>
                <h1>{details.movie.title}</h1>
                <p>{details.movie.description}</p>
                <button onClick={backButton}>Home</button>
            </div>


        </>



    );





}
export default MovieDetails;
