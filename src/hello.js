import { response } from "express";

export const hello = ( request, response) => {
    response.send("Hello . Is it me you'are looking for");
}


export const helloPerson = (request, response) => {         
    const {person } = request.params;  
    response.send(`Hello , ${person}`)
};



export const greetNewPerson = (request, response) => {
    const {firstName , lastName} = request.body;
    response.send(`Hello there, ${firstName} ${lastName}.`)
    
}