import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const adminlogin = async(req,res) => {

    try {
        const {email,password} = req.body;

        if ((email === process.env.ADMIN_EMAIL) && (password === process.env.ADMIN_PASSWORD)) {

            const token = jwt.sign({email: process.env.ADMIN_EMAIL},process.env.JWT_SECRET,{ expiresIn: "1d" });
            res.json({success:true,token})
        }

        else{
            res.json({success:false,message:"Wrong Credentials"})
        }
        } 
    
    catch (error) {
        res.json({success:false,message:error.message})
    }

}