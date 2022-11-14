// require() function is used for adding modules
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
//Loads .env file contents into process.env.
require('dotenv').config();

/// connect to database
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error);
})
database.once('connected', () => {
    console.log('Database connected!');
})

const app = express();
// express.json return a middleware that only parses JSON ddddd
// and only looks at requests where the Content-Type header matches the type option
app.use(express.json());
app.use('/api', routes);
// listen at port 3000, with callback function defined like below
app.listen(3000, () => {
    console.log('Server started at port 3000')
});