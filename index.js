import express from "express"; //import express library
import {hello, helloPerson, greetNewPerson} from './src/hello.js';
import { welcomeHome } from './src/welcome.js';
import { response } from "express";  // auto import
import { request } from "express";  // auto import 


const PORT = 3030; // Choose the port to listen our request

const app = express(); // invoke express 
app.use(express.json());

// routes ( or list of allowed request)
app.get('/hello', hello)
app.post('/hello', greetNewPerson);

app.get('/', (request, response) => {
    response.send("These are not the droids you're looking for.");
})
//below  person is a param that gets attached to the response
app.get('/hello/:person', helloPerson)

app.get('/', welcomeHome);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))