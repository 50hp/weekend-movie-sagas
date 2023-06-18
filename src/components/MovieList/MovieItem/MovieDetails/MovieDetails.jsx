import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails({}){

    const details = useSelector( store => store.currentDetails);
    const genres = useSelector( store => store.genres);
    const dispatch = useDispatch(); 
    const history = useHistory();

    const backButton = () => {
        history.push("/");

    }
   

    useEffect(() => {
        dispatch({type: "GET_DETAILS", payload: 0 });
    }, []);
        
    console.log('details.length', details.length);


    return(
     

        <>
        
            <div>
      
                {(details.length) ? (
                <div>
                    <img src={details.movie.poster}/>
                    <h1>{details.movie.title}</h1>
                    <p>{details.movie.description}</p>
                    <button onClick={backButton}>Home</button>
                </div>                    
                ): (
                    <p>loading</p>
                )}



            </div>


        </>



    );





}
export default MovieDetails;
