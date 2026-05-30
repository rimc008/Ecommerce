import mongoose from "mongoose"


// Schema making

const ProductSchema = new mongoose.Schema({

    name : {type: String, required: true},
    price : {type: Number, required: true},
    image : {type: Array, required: true},
    size : {type : String, required: true},
    id : {type : String , required:true},
    

})

/*Because in frameworks like Next.js / serverless / hot reload (nodemon):

Files can run multiple times
If you do this again:

Mongoose will throw an error:
Cannot overwrite product model once compiled

*/

const Product1 =  mongoose.models.product || mongoose.model("product",ProductSchema)

export default Product1

