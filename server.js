import { configDotenv } from 'dotenv';
import express from 'express'
import colors from 'colors'
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import connectDatabase from './config/db.js';
import ExpenseRoutes from './routes/ExpenseRoutes.js';
const app = express();
configDotenv();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());

connectDatabase();

app.use('/api/v1',ExpenseRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`.bgBlue);
})      