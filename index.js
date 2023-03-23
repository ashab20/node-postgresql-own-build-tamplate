/*
? Title: 'PostgreSql Project' 
* Description: 'pern stack tamplate'
! Author: 'Ashab Uddin'
* contact: ''
* Date: '2023-03-23'
*/


require('dotenv').config();



// unhandle cought error
process.on('uncaughtException', (err) =>{
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to the uncounght server error`);
    process.exit(1);
    // like undifine fundtion call
})



// Module scufholding
const app = require('./app');
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

