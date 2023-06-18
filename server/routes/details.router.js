const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


let idToGet = 0;


router.get('/:id', (req, res) => {

    if(req.params.id) {
        idToGet = req.params.id;
    }



    console.log(idToGet);
    const queryText = `
          SELECT *
          FROM movies
          WHERE movies.id = $1;`;
    
    pool.query(queryText, [idToGet])
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((err) => {
        console.log('error with query', queryText);
        res.sendStatus(500);
    });

});


module.exports = router;
