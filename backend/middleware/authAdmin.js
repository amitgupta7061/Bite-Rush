import jwt from 'jsonwebtoken';

export const authAdmin = async (req, res) => {
    try {
        const {aToken} = req.body;

        if(!aToken){
            return res.json({
                success:false,
                message:'Un-Authorized access'
            })
        }

        const decoded_token = await jwt.verify(aToken, process.env.ADMIN_EMAIL);
        
    } catch (error) {
        console.log('error in authUser', error);
        res.json({
            success:false,
            message:'Internal Server Error',
        })
    }
}