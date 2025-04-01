import jwt from 'jsonwebtoken';

export const authAdmin = async (req, res, next) => {
    try {
        const {atoken} = req.headers;
        if(!atoken){
            return res.json({
                success:false,
                message:'Un-Authorized access'
            })
        }

        const decoded_token = jwt.verify(atoken, process.env.JWT_SECRET);

        if(decoded_token.email !== process.env.ADMIN_EMAIL){
            return res.json({
                success:false,
                message:'Un-Authorized access'
            })
        }

        next();
        
    } catch (error) {
        console.log('error in authUser', error);
        res.json({
            success:false,
            message:'Internal Server Error',
        })
    }
}