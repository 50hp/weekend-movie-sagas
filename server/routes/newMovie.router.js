const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();


//router to query OMDb with a search query and send the response to the user
router.get('/:query', (req, res) => {
    console.log(req.params.query);
    const query = req.params.query;
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`)
        .then((response) => {
        console.log(response.data);
        res.send(response.data);
        }).catch (err => {
            res.sendStatus(500);
        });
});
module.exports = router;
