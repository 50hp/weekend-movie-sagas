import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieDetails from '../MovieList/MovieItem/MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
            <MovieDetails />
        </Route>
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
