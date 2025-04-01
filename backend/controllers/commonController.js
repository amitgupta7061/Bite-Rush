import ItemModel from "../models/ItemModel.js";


export const getAllItems = async (req, res) => {
    try {
        const Items = await ItemModel.find();

        res.json({
            success:true,
            Items,
        })
    } catch (error) {
        console.log('Error in getAllItems controller', error);
        res.json({
            success:false,
            message:'Internal server error'
        })
    }
}