import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from "react-router";
import {ShopContext} from "../context/ShopContext.jsx"
import { button, div, p } from 'framer-motion/client';
import './LatestCollections.css'
import Bottompage from './Bottompage.jsx';
import {assets} from "../assets/assets.js"




const Product = () => {

  // global things get using usecontext
  const {products,objt,setObjt,cart,setCart} = useContext(ShopContext)

  console.log(products);
  

  // parameter indentical or not 
  let params = useParams();
  const product = products.find(p => p._id == params.productId)


  //usestate hooks
  const [imageset,setImageset] = useState(product.image[0]);
  const [sizedecide,setSizedecide] = useState(false);
  let [cartload,setCartload] = useState(0);
  let addcartvalidator = true;
  const [bgdecider,setBgdecider] = useState(false);
  const [bgdecider2,setBgdecider2] = useState(null);
  


  // a function to decide that a item should be includede in a cart or not and a decider function for change in backgroundcolor of size button
  const sizedecider = (item1) => {
    setSizedecide(true);

    setBgdecider2(item1)
  }

    // to show items in cart 
    useEffect(() =>  {
  
      const getitemfunction = async(e) => {
  
        try {
  
          const res = await fetch("http://localhost:4001/api/product/all1",
          {
  
            method:"GET",
            headers : {
            "Content-Type":"application/json",
            Authorization : `Bearer ${localStorage.getItem("token")}`
            }
  
          })
  
          const data7 = await res.json()
  
          if (data7.success){
            
            const newcart = data7.data
            setCart(newcart)          
          }
  
          else{
  
            console.log(1);
            
            alert(data7.message)
          }
  
        } catch (error) {
          
          console.log(2);
          
          alert(error.message)
        }
  
      }
  
      console.log(cart);
      
      getitemfunction();
      
  
    },[cartload])//useeffect hook only trigger if the dependency has the potential to re-render the componenet . so , the dependency must be a state variable not a normal variable.

  const handleChange8 = async(e) => {

    if (sizedecide){
      try {
        const res = await fetch("http://localhost:4001/api/product/additem" , 
          {
            method:"POST",
            headers : {
              "Content-Type":"application/json",
              Authorization : `Bearer ${localStorage.getItem("token")}`
            },

            body : JSON.stringify({name:product.name,price:product.price,image:product.image[0],size:bgdecider2,id:product._id}) 
          }
        )

        const data = await res.json();

        if(data.success){
          setCartload(cartload+1)
          alert("Item Added To Cart")
          
        }
        else{
          addcartvalidator = false
          alert(data.message);
        }

      } catch (error) {
        console.log(error.message);
         
      }
    }

  }

  // items append to cart list(push would not work as it returns size only)(synchronous)
  const handleChange4 = () => {

    //synchronous purpose
    if (sizedecide && addcartvalidator){

      setBgdecider(!bgdecider)

    }

    else{
      if(!sizedecide) {alert("Set a size first")}
    }
  }

  const handleChange3 = (e) => {
    const {src} = e.target;

    setImageset(src)
  }

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (

    <div>
      <div style={{display:"grid",gridTemplateColumns:"1.5fr 2.5fr 3fr",marginTop:"50px",gap:"2.1%"}}>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"end",gap:"5px"}}>
            {
              product.image.map((item) => (
                <div>
                  <img src={item} className="imag" onClick={handleChange3} alt="" style={{height:"180px",width:"fit-content",border:"solid black 3px",borderRadius:"10px"}}/>
                  
                </div>
              ))
            }
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src={imageset} alt="" style={{height:"98%",width:"95%",borderRadius:"10px",border:"solid black 3px"}}/>
          
        </div>
        <div style={{width:"100%"}}>
          
            <div style={{display:"flex",flexDirection:"column"}} className='container8'>

              <div>
                <h2>{product.name}</h2>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                  <p>{(product.rating)>4 ? 

                  <div style={{display:"flex"}}>
                    {Array(4).fill(0).map((item) => <img style={{height:"20px",width:"20px"}} src={assets.star_icon} alt="" />)}

                    {Array(1).fill(0).map((item) => <img style={{height:"20px",width:"20px"}} src={assets.star_dull_icon} alt="" />)}

                    <p style={{padding:0,margin:0,marginLeft:10,fontSize:20,fontWeight:"bold"}}>{product.rating}</p>
                  </div>: 
                  <div style={{display:"flex"}}>
                    {Array(3).fill(0).map((item) => <img style={{height:"20px",width:"20px"}} src={assets.star_icon} alt="" />)}

                    {Array(2).fill(0).map((item) => <img style={{height:"20px",width:"20px"}} src={assets.star_dull_icon} alt="" />)}

                    <p style={{padding:0,margin:0,marginLeft:10,fontSize:20,fontWeight:"bold"}}>{product.rating}</p>
                  </div>                  
                  }

                 
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <h4>Select Size</h4>
                <div>
                  {product.size.map((item1) => (
                    <button style={{height:"40px",width:"45px",fontSize:"17px",marginRight:"10px",borderRadius:"5px",backgroundColor:bgdecider2==item1? "grey":""}} className="imag2" onClick={()=>sizedecider(item1)}>
                      {item1}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{border:"solid black 3px",width:"152px",textAlign:"center",marginTop:"20px",backgroundColor: bgdecider?"white":"black",color: bgdecider?"black":"white",borderRadius:"5px",fontWeight:bgdecider?"bold":""}} className='imag3' onClick={async() => {await handleChange8();handleChange4()}}>
                <p>ADD TO CART</p>
              </div>

              <div style={{marginTop:"80px"}}>
                <p>100% original cotton <br />
                Cash on delivery is available on this product <br />
                Easy return and refund policy</p>
              </div>
            </div>
          
        </div>

      </div>
      <div>
        <div style={{textAlign:"center",marginTop:"100px"}}><h1>Related products</h1></div>

        <div style={{display:"flex",flexDirection:"row",gap:"15px",justifyContent:"center"}}>
          {
            products.filter((item2) => (
              item2.category == product.category && item2.subcategory == product.subcategory 
            )).slice(1,6).map((item3) => (
              <div>
                  <Link to={`/product/${item3._id}`}><img src={item3.image[0]} alt="" className='imag'/></Link>
                
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <Bottompage />
      </div>
    </div>

  )
}

export default Product


