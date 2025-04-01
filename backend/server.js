import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDatabase from './config/database.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';


const app = express();
const PORT = process.env.PORT || 4000;
connectDatabase();
connectCloudinary();

app.use(express.json())
app.use(cors())

app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
    console.log('Server Started at port Number : ', PORT);
})