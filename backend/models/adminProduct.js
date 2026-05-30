import mongoose from "mongoose"

const adminProductSchema = new mongoose.Schema({

    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    subcategory:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Array,required:true},
    size:{type:Array,requiresd:true},
    rating:{type:Number}

})

const adminProduct1 = mongoose.model.adminproduct || mongoose.model("adminproduct",adminProductSchema)

export default adminProduct1