const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    const idToGet = req.params.id;
  // Add query to get all genres
    const queryText =   
         `SELECT "genres"."name" AS "category" FROM "genres"
          JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
          JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
          WHERE "movies"."id" = $1;`;
    
    pool.query(queryText, [idToGet])
    .then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error with query', queryText);
        res.sendStatus(500);
    });
});

module.exports = router;
