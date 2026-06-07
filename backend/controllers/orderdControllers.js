import {v2 as cloudinary} from "cloudinary";
import Ordered1 from "../models/orderedProduct.js";
import { data } from "react-router-dom";

// order the item/items
export const addorderedproduct = async(req,res) => {

    try {

        const {productname,firstname,size,price,image,address,zipcode,phone,paymentmethod,status,id} = req.body;

        const userid = req.user.id;

        const data7 = await Ordered1.create({
            productname,firstname,size,price,image,address,zipcode,phone,paymentmethod,status,id,userid
        })

        res.json({success:true,message:"Item Ordered"})


    } catch (error) {
        res.json({success:false,message:error.message})     
    }

} 

// see the ordered products
export const seeorderedproducts = async(req,res) => {
    try {
        
        const data_new2 = await Ordered1.find()
        const data8 = data_new2.filter((item) => item.userid === req.user.id)

        if (data8.length === 0){
            return res.json({success:false,message:"No Order Yet"})
        }
        res.json({sucess:true,data8})

    } catch (error) {
        res.json({success:false,message:error.message})        
    }

}