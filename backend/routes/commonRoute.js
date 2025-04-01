import express from "express";
import { getAllItems } from "../controllers/commonController.js";

const commonRouter = express.Router();

commonRouter.get('/get-items', getAllItems)

export default commonRouter