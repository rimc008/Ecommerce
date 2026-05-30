import Product1 from "../models/productModel.js"

//add product
export const addProduct = async(req,res) => {

    try {
    const {name,price,image,size,id} = req.body;
    const presentalready = await Product1.findOne({id,size})

    if (presentalready){
        res.json({success:false,message:"Already In cart"})
    }


    console.log(req.user);
    const user = req.user.id;

    const data1 = await Product1.create({
        name,price,image,size,id
    })

    res.json({success:true,message:"item added", createdBy : user}) 

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}


//get all added item
export const all1 = async(req, res) => {
  const data = await Product1.find();

  res.json({success:true,data});
}


//delete product
export const deleteProduct = async(req,res) => {

    try {
        const {id,size} = req.body;
        const data2 = await Product1.findOneAndDelete({id,size});

        res.json({success:true,message:"Item Deleted"});

    } catch (error) {

        res.json({success:false,message:error.message});
    }
}

export const deleteallproduct = async(req,res) => {

    try {

        const data7 = await Product1.deleteMany({});

        res.json({success:true,message:"All Item Deleted"});

    } catch (error) {

        res.json({success:false,message:error.message});
    }
}