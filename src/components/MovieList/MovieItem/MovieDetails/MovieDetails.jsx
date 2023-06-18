import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

function MovieDetails({}){

    const movie = useSelector( store => store.currentDetails);
    const genres = useSelector( store => store.genres);
    const dispatch = useDispatch(); 
    const history = useHistory();
    const ID = useParams()
    const backButton = () => {
        history.push("/");

    }
   

    useEffect(() => {
        console.log(ID); 
        dispatch({type:"GET_DETAILS", payload: ID.id})
    }, []);
        
    console.log('details.length', movie.length, movie);


    return(
     

        <>
        
            <div>
      
                
                <div>
                    <img src={movie.poster}/>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <button onClick={backButton}>Home</button>
                </div>                    



            </div>


        </>



    );





}
export default MovieDetails;
