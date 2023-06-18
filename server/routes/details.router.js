const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


let idToGet = 0;


router.get('/:id', (req, res) => {

    const idToGet = req.params.id;
    console.log(idToGet);
    const queryText = `
        SELECT * FROM movies
        JOIN movies_genres on movies.id = movies_genres.movie_id
        JOIN genres on movies_genres.genre_id = genres.id
        WHERE movies.id = 1;`;
    
    pool.query(queryText)
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((err) => {
        console.log('error with query', queryText);
        res.sendStatus(500);
    });

});


module.exports = router;
