import { useSelector } from "react-redux";


function MovieDetails({}){

   const details = useSelector( store => store.currentDetails);

   

    console.log(details);

    return(

        
        <>
            <img src={details.movie.poster}/>
            <h1>{details.movie.title}</h1>
            <p>{details.movie.description}</p>

        </>



    );





}
export default MovieDetails;
