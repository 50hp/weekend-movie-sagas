import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails({}){

    const details = useSelector( store => store.currentDetails);
    const history = useHistory();

    const backButton = () => {
        history.push("/");

    }
   

    console.log(details);

    return(

        
        <>  {(details.length) ? (
            <div>
                <img src={details.movie.poster}/>
                <h1>{details.movie.title}</h1>
                <p>{details.movie.description}</p>
                <button onClick={backButton}>Home</button>
            </div>
        ) : (

            <button onClick={backButton}>Home</button>

        )}
        </>



    );





}
export default MovieDetails;
