const express = require('express');
const Error = require('./middlewares/error');
const router = require('./routes/router');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    // console.log('ok');
    res.send("Welcome to our server")
});

app.use(router);
app.use(Error);

module.exports = app;