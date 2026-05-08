import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User1 from "../models/userModel.js"

const createTokens = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}


//sign up
export const userRegister = async(req,res) => {

    try {
        const {name,email,password} = req.body;

        const data = await User1.findOne({email})

        if (data){
            return res.json({success:false,message:"User already exists"})
        }

        if (!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        
        if (password.length < 8) {
            return res.json({success:false,message:"Enter atleast 8 character password"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User1.create({
            name,
            email,
            password : hashedPassword
        })

        const token = createTokens(user._id)

        res.json({success:true,token})

    } catch (error) {

        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

//login verification
export const userlogin = async(req,res) => {

    try {
        const {email,password} = req.body;

        const data = await User1.findOne({email})

        if (!data) {
            res.send({sucess:"false",message:"please sign up first"})
        }

        if (!validator.isEmail(email)){
                return res.json({success:false,message:"Please enter valid email"})
        }

        if (password.length < 8) {
                return res.json({success:false,message:"Enter atleast 8 character password"})
        }

        const compare = await bcrypt.compare(password,data.password)

        if (!compare){
            return res.json({success:false,message:"Incorrect password"})
        }

        const token = createTokens(data._id)

        res.send({success:"true",message:"Welcome back",token})

    } catch (error) {
        console.log(error);
        res.send({sucess:false,message:error.message})
        
    }   

}

// read all resistered identity
export const all = async(req, res) => {
  const data = await User1.find();

  res.json(data);
}


// if we do named export like export const function then we can use import {,,,}
//if we do default export then we must import just by name of the function no {}
//if we do only export then we can do import {,,,} again ..