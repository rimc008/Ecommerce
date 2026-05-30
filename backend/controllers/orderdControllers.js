import {v2 as cloudinary} from "cloudinary";
import Ordered1 from "../models/orderedProduct.js";


export const addorderedproduct = async(req,res) => {

    try {

        const {productname,firstname,size,price,image,address,zipcode,phone,paymentmethod,status,id} = req.body;

        const data7 = await Ordered1.create({
            productname,firstname,size,price,image,address,zipcode,phone,paymentmethod,status,id
        })

        res.json({success:true,message:"Item Ordered"})


    } catch (error) {
        res.json({success:false,message:error.message})     
    }

} 

export const seeorderedproducts = async(req,res) => {
    try {
        
        const data8 = await Ordered1.find()
        res.json({sucess:true,data8})

    } catch (error) {
        res.json({success:false,message:error.message})        
    }

}