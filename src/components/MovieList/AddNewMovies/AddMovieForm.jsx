import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DisplayMovie from './DisplayMovie/DisplayMovie.jsx';

function AddNewMovie() {
    
    const dispatch = useDispatch();
    const results = useSelector(store => store.movieSearch);
    const [input, setInput] = useState(String);

    const [inputOne, setInputOne] = useState(String);
    const [inputTwo, setInputTwo] = useState(String);
    const [inputThree, setInputThree] = useState(String);
    const [inputFour, setInputFour] = useState(String);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:"SEARCH_MOVIES", payload: input});
        console.log(results);
    }

    const handleChange = (value) => {
        setInput(value);
    }
    return(

        <div>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <input type='text'
                       value={input}
                       onChange={(e) => handleChange(e.target.value)} />
                <button type="submit">Search</button> 
            </form>

             <form onSubmit={(event)=> handleSubmit(event)}>
                   <input type='text'
                       placeholder="Title"
                       value={inputOne}
                       required
                       onChange={(e) => handleChange(e.target.value)} />
                    <input type='text'
                       placeholder="Poster url"
                       value={inputTwo}
                       required
                       onChange={(e) => handleChange(e.target.value)} />
                    <input type='text'
                       placeholder="Description"
                       value={inputThree}
                       required
                       onChange={(e) => handleChange(e.target.value)} />
                    <input type='text'
                       value={inputFour}
                       name="Genera"
                       required
                       onChange={(e) => handleChange(e.target.value)} />
                <button type="submit">Search</button> 
            </form>

            <div>
                 {results.map((movie, i) => (
                     <DisplayMovie key={i} movie={movie} />
                 ))}
            </div>



        </div>




    );






}

export default AddNewMovie;
