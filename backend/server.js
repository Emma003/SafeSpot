//dotenv package allows to load env vars from a .env file into process.env object
require('dotenv').config();

//import express
const https = require('https');
const fs = require('fs');
const express = require('express');


//import routes
 const homeRoutes = require('./routes/home');


//start express app
const app = express();
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

//global middleware
app.use(express.json()); //parse json bodies of requests (if it exists) and attaches it to req.body

app.use((req, res, next) => {
    console.log(req.path, req.method); //logs the path and method of every request
    next(); //called when this middleware is done running (to move on to the next middleware)
}
);

//use routes
app.use('/api', homeRoutes);


//listen for requests
app.listen(process.env.PORT, () => { //we only want to listen to requests after we have connected to the db
    console.log('listening on port 8080');
})

// https.createServer(options, app).listen(process.env.PORT, () => {
//     console.log("HTTPS Server running on port 8080");
// });




