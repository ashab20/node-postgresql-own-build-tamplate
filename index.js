/*
? Title: 'PostgreSql Project' 
* Description: 'mern stack ecommerce poroject'
! Author: 'Ashab Uddin'
* contact: ''
* Date: '2023-03-23'
*/

import {config} from "dotenv";
import app from './app.js';



config();

// unhandle cought error
process.on('uncaughtException', (err) =>{
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to the uncounght server error`);
    process.exit(1);
    // like undifine fundtion call
})



// Module scufholding
const port = process.env.PORT;


// Listening to servr
app.listen(port,()=>{
    console.log(`Server listening to ${port}`)
})


// unhadle Promise rejection 
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    console.log(`Server shutting down the server due to unhandle promise rejaction`);
    server.close(()=>{
        process.exit(1);
    });
})

