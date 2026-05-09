import Product1 from "../models/productModel.js"

//add product
export const addProduct = async(req,res) => {

    try {
    const {name,price,image,size,id} = req.body;

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

  res.json(data);
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