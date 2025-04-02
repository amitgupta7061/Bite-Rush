import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import ItemModel from '../models/ItemModel.js';


export const adminLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.json({
                success:false,
                message:'All fields are mandatory'
            })
        }
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "7d"});
            return res.json({
                success:true,
                message:'Login Successfully',
                token
            })
        } else{
            return res.json({
                success:false,
                message:'Invalid Credential'
            })
        }

    } catch (error) {
        console.log('Error in adminLogin controller', error);
        res.json({
            success:false,
            message:'Internal server error'
        })
    }
}

export const addItem = async (req, res) => {
    try {
        const {name, price, desc, category} = req.body;
        const image = req.file;

        if(!name || !price || !desc || !image || !category){
            return res.json({
                success:false,
                message:'All Fields are mandatory'
            })
        }

        const uploadImage = await cloudinary.uploader.upload(image.path, {resource_type:'image'});

        const newItem = new ItemModel({
            image:uploadImage.secure_url,
            name,
            price,
            desc,
            category
        })

        await newItem.save();

        res.json({
            success:true,
            message:'Item added Successfully'
        })
        
    } catch (error) {
        console.log('Error in addItem controller', error);
        res.json({
            success:false,
            message:'Internal server error'
        })
    }
}


export const removeItem = async (req, res) => {
    try {
        const {itemId} = req.body;

        await ItemModel.findByIdAndDelete(itemId);

        res.json({
            success:true,
            message:'Item deleted Successfully'
        })
    } catch (error) {
        console.log('Error in remove controller', error);
        res.json({
            success:false,
            message:'Internal server error'
        })
    }
}