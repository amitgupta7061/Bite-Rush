import jwt from 'jsonwebtoken';

export const authUser = async (req, res, next) => {
    try {
        const {token} = req.body;

        if(!token){
            return res.json({
                success:false,
                message:'Un-Authorized access'
            })
        }

        const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded_token.id;

        next();
        
    } catch (error) {
        console.log('error in authUser', error);
        res.json({
            success:false,
            message:'Internal Server Error',
        })
    }
}