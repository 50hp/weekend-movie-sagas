import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddMovieMeta(){

    const dispatch = useDispatch();
    const results = useSelector(store => store.movieToAdd);
    const genres = useSelector(store => store.genres);
    const history = useHistory();
// add a new reducer to hande list of genres avalible in db since details is now
    // using the genres reducer.
// change handleSubmit to use link instead  
    const handleSubmit = () => {
         
        dispatch({type:"ADD_MOVIE", payload: {
            title: results.Title,
            poster: results.Poster,
            description: results.Plot,
            genre_id: handleGenreCreation()
        }});    

            history.push('/');

    }

    const handleGenreCreation = () => {
        let genreId = 1;
        let string = results.Genre;
        let currentGenres = string.split(",")
        for (let genre of genres) {
            console.log(genre.name);
            for ( let currentGenre of currentGenres ) {
                    console.log(currentGenre);
                if ( currentGenre == genre.name) {
                    console.log('match!!!!!!!!');
                    genreId = genre.id;
                    console.log(genreId);
                    return genreId;
                }
            }
        } 
        return genreId;
    }
    return(


        <div>
                 <div>
                    <h3>{results.Title}</h3>
                    <img src={results.Poster} alt={results.Title}/>
                    <p>{results.Plot}</p>
                    <button onClick={handleSubmit}>Add Movie</button>
                
                 </div> 



        </div>

    );



}

export default AddMovieMeta;
