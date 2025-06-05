import { configDotenv } from 'dotenv';
import express from 'express'
import colors from 'colors'
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import connectDatabase from './config/db.js';
const app = express();
configDotenv();

app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());

connectDatabase();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`.bgBlue);
})