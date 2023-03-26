import express from 'express';
import Error from "./middlewares/error.js"
import router from './routes/router.js';
import cors from 'cors';

const app = express();


app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    // console.log('ok');
    res.send("Welcome to our server")
});

app.use(router);
app.use(Error);

export default app;