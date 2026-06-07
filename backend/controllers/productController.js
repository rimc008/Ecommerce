import Product1 from "../models/productModel.js"

//add product
export const addProduct = async(req,res) => {

    try {
    const {name,price,image,size,id} = req.body;
    const userid = req.user.id;

    const presentalready = await Product1.findOne({id,size,userid})

    if (presentalready){
        return res.json({success:false,message:"Already In cart"})
    }


    console.log(req.user);

    const data1 = await Product1.create({
        name,price,image,size,id,userid
    })

    res.json({success:true,message:"item added"}) 

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}

//get all added item
export const all11 = async(req, res) => {
      
  const data9 = await Product1.find();

  res.json({success:true,data9});
}

// see the added to cart items
export const all1 = async(req, res) => {
      
  const data_new = await Product1.find();

  const data = data_new.filter((item) => (item.userid === req.user.id))

  if (data.length === 0) {
    return res.json({success:false,message:"Empty Cart"})
  }

  res.json({success:true,data});
}


//delete product
export const deleteProduct = async(req,res) => {

    try {
        const {id,size} = req.body;
        const data2 = await Product1.findOneAndDelete({id,size});

        if(!data2) {return res.json({success:false,message:"item not found"})}

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