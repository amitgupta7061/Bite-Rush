import jwt from 'jsonwebtoken'

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
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "1h"});
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
        const {name, price, desc} = req.body;
        const image = req.file;

        if(!name || !price || !desc || !image){
            return res.json({
                success:false,
                message:'All Fields are mandatory'
            })
        }
        
    } catch (error) {
        console.log('Error in addItem controller', error);
        res.json({
            success:false,
            message:'Internal server error'
        })
    }
}