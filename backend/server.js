import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDatabase from './config/database.js';
import connectCloudinary from './config/cloudinary.js';


const app = express();
const PORT = process.env.PORT || 4000;
connectDatabase();
connectCloudinary();

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('Server Started at port Number : ', PORT);
})