const config = require('pg').Pool;


const db = new config({
    database:process.env.DATABASE_NAME,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USERNAME ,
    password:process.env.DB_PASSWORD,
});


module.exports = db;