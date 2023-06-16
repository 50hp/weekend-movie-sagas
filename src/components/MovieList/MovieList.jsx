import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from './MovieItem/MovieItem.jsx';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'SEARCH_MOVIES', payload:'aliens'});
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie, i)=> (
                    <MovieItem movie={movie} key={i}/> 
                ))}
            </section>
        </main>

    );
}

export default MovieList;
