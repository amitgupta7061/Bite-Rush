import express from 'express';
import { addItem, adminLogin, removeItem } from '../controllers/adminController.js';
import {authAdmin} from '../middleware/authAdmin.js'
import upload from '../middleware/multer.js'

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin)

adminRouter.post('/add-item', authAdmin, upload.single('image'), addItem);
adminRouter.post('/remove-item', authAdmin, removeItem);

export default adminRouter