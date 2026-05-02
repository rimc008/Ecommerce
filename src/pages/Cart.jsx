import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { div } from 'framer-motion/client';
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

const Cart = () => {

  const {cart,setCart,delivery_fee} = useContext(ShopContext);
  let [price,setPrice] = useState(0);
  const [items,setItems] = useState("");


  const handleChange5 =(id,size) => {
    const nextcart = cart.filter((item) => !(item._id === id && item.size === size))
    setCart(nextcart);
  
  }

  useEffect(()=> {

    let a = 0
    cart.map((item) => a += item.price) // state is immutable , you can't use state variable as a normal variable like price += item.price

    setPrice(a)

    if (cart.length > 1) {
      setItems("items");
    }
    else {
      setItems("item");
    }

  },[cart])
  
  return (

    <AnimatePresence>
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => window.scrollTo({top:0,behavior:"smooth" })}>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

      <div style={{width:"1700px",textAlign:"center"}}><h1>Your Cart ({cart.length} {items})</h1></div>

      <div style={{display:"flex",width:"1700px",justifyContent:"space-between",fontSize:"20px",borderBottom:"solid black 3px",borderTop:"solid black 3px",fontWeight:"bold"}}>
        <p style={{width:"500px",textAlign:"center"}}>Product</p>
        <p>Quantity</p>
        <p>Delete</p>
      </div>
      {cart.map((item) => (
        <div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid black 2px",width:"1700px"}}>

          <div style={{display:"flex",paddingBottom:"7px",paddingTop:"7px",width:"500px"}}>

            <img src={item.image} alt="" style={{height:"100px",width:"100px",border:"solid black 2px",borderRadius:"10px",marginRight:"10px"}}/>

            <div style={{display:"flex",justifyContent:"space-around",flexDirection:"column",height:"100px"}}>
              <div style={{fontWeight:"bold",fontSize:"20px"}}><p style={{margin:0}}>{item.name}</p></div>
              <div style={{display:"flex",gap:"20px",fontSize:"20px"}}>
                <p style={{margin:0}}>${item.price}</p>
                <p style={{margin:0}}>{item.size}</p>
              </div>
            </div>

          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"}}>
            <input style={{fontSize:"20px",border:"solid black 3px",borderRadius:"5px",height:"35px"}} type="number" min={1} defaultValue={1}/>
          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",cursor:"pointer"}}>
            <img onClick={()=>handleChange5(item._id,item.size)} src={image4} alt="" />
          </div>
          
        </div>

      ))}

    </div>

    <div style={{ marginLeft:"157px",paddingTop:"50px"}}>
      <h2>Subtotal ${price}</h2>

      <div style={{borderBottom:"solid black 3px" , width:"1700px",display:"flex",justifyContent:"space-between",gap:"20px"}}>
      
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


    <div style={{display:"flex",justifyContent:"center",paddingTop:"20px"}}>
      <div style={{textAlign:"center",width:"500px",height:"fit-content",border:"solid black 3px",borderRadius:"20px",color:"white",backgroundColor:"black",cursor:"pointer"}} className="imag3">


        <NavLink to="/collections" style={navLinkStyles3}><h1 style={{margin:0}}>Continue Shopping</h1></NavLink>

      </div>
    </div>

      <div>
        <Bottompage />
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Cart