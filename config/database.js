import config from 'pg'
import {config as env} from "dotenv";
const {Pool} = config;

env();
export default new Pool({
    database:process.env.DATABASE_NAME,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USERNAME ,
    password:process.env.DB_PASSWORD,
});
