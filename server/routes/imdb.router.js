const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();


//router to get full movie details from OMDb
router.get('/:query', (req, res) => {

    console.log(req.params.query);
    const query = req.params.query;

    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${query}&plot=full`)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch(err => {
        res.sendStatus(500);
    });

});
module.exports = router;
