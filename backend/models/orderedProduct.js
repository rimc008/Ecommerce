import mongoose from "mongoose";

const OrderedSchema = mongoose.Schema({

    "productname" : {type:String,required:true},
    "firstname" : {type:String,required:true},
    "size": {type:String,required:true},
    "price" : {type:Number,required:true},
    "image": {type:String,required:true},
    "address": {type:String,required:true},
    "zipcode": {type:String,required:true},
    "phone": {type:String,required:true},
    "paymentmethod": {type:String,required:true},
    "status": {type:String,required:true},
    "id": {type:String,required:true}

})

const Ordered1 = mongoose.models.ordered || mongoose.model("ordered",OrderedSchema)

export default Ordered1

