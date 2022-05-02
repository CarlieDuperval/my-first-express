import express from "express"; //import express library
import { response } from "express";  // auto import
import { request } from "express";  // auto import 
import {hello, helloPerson} from './src/hello.js';
import { welcomeHome } from './src/welcome.js';


const PORT = 3030; // Choose the port to listen our request

const app = express(); // invoke express 




// routes ( or list of allowed request)
app.get('/hello', hello)

app.get('/', (request, response) => {
    response.send("These are not the droids you're looking for.");
})
// person is a param that gets attached to the response
app.get('/hello/:person', helloPerson)

app.get('/', welcomeHome);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))