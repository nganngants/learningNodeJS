const express = require('express');

// use Express's router
const router = express.Router()

module.exports = router;

router.post('/post', (req, res) => {
    res.send('Post API');
})

router.get('/getall', (req, res) => {
    res.send("Get All API");
})

router.get('/getbyid/:id', (req, res) => {
    res.send('Get by ID: ' + req.params.id);
})

router.get('/updatebyid/:id', (req, res) => {
    res.send('Update by ID API');
})

router.get('/delete/:id', (req, res) => {
    res.send('Delete by ID API');
})
