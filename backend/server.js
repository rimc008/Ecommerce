import express from 'express'
import 'dotenv/config'
import ConnectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js"
import { middleware } from './middleware/middleware.js';


//app config

const app = express();
const port = process.env.PORT || 4000
ConnectDB();
connectCloudinary();

// middleware 
middleware(app)

app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)

app.listen(port , () => {
    console.log(`running on port ${port}`);
})


//api endpoints
app.get('/',(req,res)=> {
    res.send("API working")
})

// to see get working or not ..go to postman select get and then place localhost then press send
