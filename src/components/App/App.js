import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieDetails from '../MovieList/MovieItem/MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList'
import SearchMovieForm from '../MovieList/AddNewMovies/SearchMovieForm.jsx';
import AddMovieMeta from '../MovieList/AddNewMovies/AddMovieMeta/AddMovieMeta';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function App() {
   
    const history = useHistory();

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <nav>
        <Link to="/add">Add Movie</Link>
        <Link to="/">Home</Link>



        </nav>

        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
            <MovieDetails />
        </Route>
        <Route path="/add" exact>
            <SearchMovieForm />
        </Route>
         <Route path="/form" exact>
            <AddMovieMeta />
        </Route>       
      </Router>
    </div>
  );
}


export default App;
