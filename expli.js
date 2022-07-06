import express from "express"; //import express library
import { response } from "express";  // auto import
import { request } from "express";  // auto import 

import {hello} from './src/hello.js'

const PORT = 3031; // Choose the port to listen our request

const app = express(); // invoke express 




// routes ( or list of allowed request)
app.get('/hello', (request, response) => {
    response.send("Is it me you're looking for?");
});

app.get('/', (request, response) => {
    response.send("These are not the droids you're looking for.");
})
// person is a param that gets attached to the response
app.get('/hello/:person', (request, response) => {           //to put person as parameter
    const {person } = request.params;  // here we extract person from the response
    response.send(`Hello , ${person}`);
})


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))

// to do a POST, PATCH, PUT, DELETE you need to use Postman
// postman allows us to create body 