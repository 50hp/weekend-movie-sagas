import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeLatest('SEARCH_MOVIES', searchMovies);
    yield takeLatest('ADD_MOVIE', addMovie);
    yield takeLatest('IMDB_GET', imDBquery);
    yield takeLatest('GET_DETAILS', setDetailsPage);
}

function* fetchAllMovies() {
    // get all movies from the DB 
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
        const genres = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: genres.data});
    } catch {
        console.log('get all error');
    }
        
};

//sends query term to search OMDb api
function* searchMovies(action) {

    try {
        const query = action.payload;
        const results = yield axios.get(`/api/newMovie/${query}`);
        yield put({ type: 'SEARCH_RESULTS', payload: results.data.Search});
    } catch {
        console.log('search get error');
    }
}

//sends new movie information to server to be stored in the db
function* addMovie(action) {

    try {
        console.log(action.payload);
        yield axios.post('/api/movie', action.payload);
    } catch {
        console.log('error with post request');
    }
};

//Pulls the movie plot to be added to the description when movie is added
function* imDBquery(action) {

    try {
        console.log(action.payload);
        const query = action.payload;
        const results = yield axios.get(`/api/imdb/${query}`);
        yield put({ type: 'MOVIE_TO_ADD', payload: results.data});
    }catch{
        console.log('error with imdb get');
        }

};

//gets the needed information for the given datails page.
function* setDetailsPage(action) {

    try {
        console.log(action.payload);
        const results = yield axios.get(`/api/details/${action.payload}`);
        yield put({type: "SET_DETAILS", payload: results.data[0]});
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        yield put({type: "SET_GENRES", payload: genres.data});
    }catch{
        console.log('error with details get');
    }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
//reducer for current details
const currentDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
//reducer to store the response from OMDb
const movieSearch = (state =[], action) => {
    switch (action.type) {
        case 'SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
}
//stores the information of movie being added.
const movieToAdd = (state = {}, action) => {
    switch (action.type) {
            case 'MOVIE_TO_ADD':
                return action.payload;
            default:
                return state;
        }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentDetails,
        movieSearch,
        movieToAdd,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
