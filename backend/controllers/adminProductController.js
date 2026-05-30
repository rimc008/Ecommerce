import { data } from "framer-motion/client";
import adminProduct1 from "../models/adminProduct.js";
import {v2 as cloudinary} from "cloudinary";

//add product by admin
export const addadminproduct = async(req,res) =>{

    try {
        
        
        const {name,description,category,subcategory,price,size} = req.body;

        const imagesUrl = await Promise.all(

            req.files.map(async(item)=>{

                const result =
                await cloudinary.uploader.upload(
                    item.path,
                    {
                        resource_type:"image"
                    }
                )

                return result.secure_url

            })

        )


        const data3 = await adminProduct1.create({
                name,description,category,subcategory,price,image:imagesUrl,size
        })
        
        res.json({success:true,message:"item added"}) 

    } catch (error) {
        res.json({success:false,message:error.message})    
    }

}

//get products that has been added by admin
export const getadminitems = async(req,res) => {

    try {
        const data4 = await adminProduct1.find();

        res.json({success:true,data4})

    } catch (error) {
        res.json({success:false,message:error.message})
    }

}

export const deleteitem = async(req,res) => {
    try {
        const data5 = await adminProduct1.deleteMany({})
        res.json(data5)      
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const deletesingleitem = async(req,res) => {
    try {

        const {id} = req.body;
        await adminProduct1.findByIdAndDelete(id)

        const data6 = await adminProduct1.find();

        res.json({success:true,data6})

    } catch (error) {
        res.json({success:true,message:error.message})      
    }
}

export const updateitems = async(req,res) => {
    try {
        const data6 = await adminProduct1.find();

        for (let i=0;i<data6.length;i++){

            data6[i]["rating"] = (i%2 == 0) ? 4.3 : (i%3 == 0)? 4.7 : 4.2;

            await data6[i].save();
        }

        res.json({success:true,data6})


    } catch (error) {
        res.json({success:false,message:error.message})   
    }
}