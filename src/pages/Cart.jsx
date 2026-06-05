import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { div, linearGradient } from 'framer-motion/client';
import image4 from "../assets/bin_icon.png"
import Bottompage from './Bottompage';
import { NavLink } from 'react-router-dom';
import './LatestCollections.css'
import {motion, AnimatePresence } from 'framer-motion';

const navLinkStyles3 = {
    color: "white",
    fontWeight : "bold",
    textDecoration:"None",
};

const Cart = ({price,setPrice}) => {

  const {cart,setCart,delivery_fee} = useContext(ShopContext);
  

  let [quantity,setQuantity] = useState(() => {
    try{
        const storedItems4 = localStorage.getItem("quantity");
        return storedItems4 ? JSON.parse(storedItems4) : {};
        }
        catch{
            return {}
        }
  })

  useEffect(() => {
    localStorage.setItem("quantity",JSON.stringify(quantity))
  },[quantity])

  const [items,setItems] = useState("");

  const [idfrdel,setIdfrdel] = useState([])

  console.log(quantity);

  
  // this function is to delete the item from database
  const handleChange9 = async(id,size) => {

    console.log(cart);
    
    console.log("calling handle change 9");
    
    const nextidfrdel = cart.filter((item) => item._id === id)
    setIdfrdel(nextidfrdel)
    console.log(nextidfrdel);
    

    try {
      const res = await fetch("http://localhost:4001/api/product/deleteitem",
        {
          method:"DELETE",
          headers : {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({id : nextidfrdel[0].id , size:size})
        }
      )

      const data = await res.json();

      if(data.success){
        alert("Item Deleted");
      }
      else{
        alert(data.message);
      }

    } catch (error) {
      console.log(error.message);
       
    }
  }

  // this function is to delete the item from local storage cart
  const handleChange5 =(id,size) => {
    const nextcart = cart.filter((item) => !(item._id === id && item.size === size))
    setCart(nextcart);
  
  }

  useEffect(()=> {

    let a = 0
    cart.map((item) => a += item.price*(quantity[`${item._id}-${item.size}`]||1)) // state is immutable , you can't use state variable as a normal variable like price += item.price

    setPrice(a)

    if (cart.length > 1) {
      setItems("items");
    }
    else {
      setItems("item");
    }

  },[cart,quantity])
  
  return (

    <AnimatePresence>
    <motion.div style={{height:"100vh"}}
    initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => window.scrollTo({top:0,behavior:"smooth" })}>

    {localStorage.getItem("token") ?
      
    <div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

      <div style={{width:"90%",textAlign:"center"}}><h1>Your Cart ({cart.length} {items})</h1></div>

      <div style={{display:"flex",width:"90%",justifyContent:"space-between",fontSize:"20px",borderBottom:"solid black 3px",borderTop:"solid black 3px",fontWeight:"bold",background: "linear-gradient(to right,transparent 0%, #f90303ae 15%, #f90303ae 85%,transparent 100%)",paddingRight:"20px"}}>
        <p style={{width:"500px",textAlign:"center"}}>Product</p>
        <p>Quantity</p>
        <p>Delete</p>
      </div>
      {cart.map((item) => (
        <div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid black 2px",width:"90%"}}>

          <div style={{display:"flex",paddingBottom:"7px",paddingTop:"7px",width:"500px"}}>

            <img src={item.image} alt="" style={{height:"100px",width:"100px",border:"solid black 2px",borderRadius:"10px",marginRight:"10px"}}/>

            <div style={{display:"flex",justifyContent:"space-around",flexDirection:"column",height:"100px"}}>
              <div style={{fontWeight:"bold",fontSize:"20px"}}><p style={{margin:0}}>{item.name}</p></div>

              <div style={{display:"flex",gap:"20px",fontSize:"20px"}}>
                <p style={{margin:0}}>${item.price}</p>
                <p style={{margin:0}}>{item.size}</p>
                <p style={{margin:0}}>Q - {quantity[`${item._id}-${item.size}`] || 1}</p>
              </div>

            </div>

          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"}}>
            <input style={{fontSize:"20px",border:"solid black 3px",borderRadius:"5px",height:"35px"}} type="number" min={1} value={quantity[`${item._id}-${item.size}`] || 1} onChange={(e) => 
            
            setQuantity((prev) => ({
              ...prev,
              [`${item._id}-${item.size}`] : e.target.value

            }))

      }/>
          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",cursor:"pointer",paddingRight:"20px"}}>
            <img onClick={()=>{handleChange5(item._id,item.size),handleChange9(item._id,item.size)}} src={image4} alt="" />
          </div>
          
        </div>

      ))}

    </div>

    <div style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>

      <div style={{width:"90%"}}>
        <h2>Subtotal ${price}</h2>

        <div style={{width:"100%",display:"flex",borderBottom:"solid black 3px",justifyContent:"space-between",gap:"20px"}}>
        
          <h2 style={{paddingBottom:"5px"}}>Delivery Fee ${delivery_fee}</h2>
          <h2>No Platform Fee</h2>
        </div>

        <div style={{display:"flex"}}>
          <h2>Amount To Pay ${price + delivery_fee}</h2>
          <div style={{border:"solid black 3px",height:"50px",marginTop:"9px",marginLeft:"20px",width:"120px",textAlign:"center",borderRadius:"5px",backgroundColor:"black",color:"white",cursor:"pointer"}} className="imag3">
            <NavLink to="/contact" style={navLinkStyles3}>
            <h2 style={{margin:0,paddingTop:"10px"}}>Buy Now</h2></NavLink>
          </div>
        </div>

      </div>
    </div>


    <div style={{display:"flex",justifyContent:"center",paddingTop:"20px"}}>
      <div style={{textAlign:"center",width:"500px",border:"solid black 3px",height:"fit-content",borderRadius:"20px",color:"white",backgroundColor:"black",cursor:"pointer"}} className="imag3">


        <NavLink to="/collections" style={navLinkStyles3}><h1 style={{margin:0}}>Continue Shopping</h1></NavLink>

      </div>
    </div>

    </div>
    : 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"35%"}}>
      <h1>Please log in or sign up first.</h1>
    </div> }


      <div>
        <Bottompage />
      </div>

    </motion.div>
    </AnimatePresence>
  )
}

export default Cart