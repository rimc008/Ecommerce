import mongoose from "mongoose"


//connection with mongoose
const ConnectDB = async() => {

    await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch(error => console.log(error));
    
}

export default ConnectDB