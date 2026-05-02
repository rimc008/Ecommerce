import React,{useContext,useEffect,useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx"
import { Link } from 'react-router-dom'
import './LatestCollections.css'
import { motion,AnimatePresence } from 'framer-motion'
import { div, object } from 'framer-motion/client'
import Bottompage from './Bottompage.jsx'



const Collections = ({search}) => {

  const {products} = useContext(ShopContext);
  console.log(products);

  //1.product list as before
  let finalProductList = [...products];

  //2.search apply
  if(search.length > 0){
    finalProductList = finalProductList.filter((item) => { // () this would not work because it use for directly return single statement but here is multiple statement

      let arr1 = item.name.toLowerCase().split(" ")
      let arr2 = search.toLowerCase().trim().split(" ")

      return arr2.every((item1) => arr1.includes(item1))
  })
  }

  //3.filter apply
  const [filters, setFilters] = useState({
    Men: false,
    Women: false,
    Kids: false,
    Topwear: false,
    Bottomwear: false,
    Winterwear: false
  });

  const handleChange = (e) => {
    const {name,checked} = e.target;

    const nextFilters = {
      ...filters,
      [name] : checked
    }

    setFilters(nextFilters)
  }

  const activeFilters = Object.keys(filters).filter(item => filters[item]);

  if (activeFilters.length > 0){

    finalProductList = finalProductList.filter(item => 
      activeFilters.includes(item.category) || activeFilters.includes(item.subCategory)
    )
  }

  //sort apply
   const [sortBy,setSortBy] = useState("")

   const handleChange2 = (e) => {
     const {value} = e.target

     setSortBy(value);
   }

   if (sortBy === "increasing") {
    finalProductList.sort((a,b) => a.price - b.price);
   }
   else if (sortBy === "decreasing"){
    finalProductList.sort((a,b) => b.price - a.price);
   }



  return (

    <AnimatePresence>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => window.scrollTo({top:0,behavior:"smooth" })}>
    <div

     style={{display:"grid",gridTemplateColumns:"1fr 2fr"}}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"80vh",position:"sticky",top:"0"}}>

        <div><h1>Filters</h1></div>

        <div style={{display:"flex",border:"solid black 2px",borderRadius:"20px",width:"165px",height:"50px",alignItems:"center",paddingLeft:"75px",marginBottom:"30px",boxShadow:"7px 7px 0px black"}}>
          <input type="checkbox" id="Men" name="Men" value="Men" style={{height:"20px",width:"20px" }}/>
            <label htmlFor="Men" style={{fontSize:"30px"}}>All</label>
        </div>

        <div style={{display:"flex",flexDirection:"column",border:"solid black 2px",borderRadius:"20px",width:"190px",height:"200px",justifyContent:"center",paddingLeft:"50px",marginBottom:"30px",boxShadow:"7px 7px 0px black"}}>

          <div style={{paddingBottom:"5px"}}>
            <input type="checkbox" id="Men" name="Men" value="Men" style={{height:"20px",width:"20px"}} onChange = {handleChange}/>
            <label htmlFor="Men" style={{fontSize:"30px"}}>Men</label>
          </div>
          <div style={{paddingBottom:"5px"}}>
            <input type="checkbox" id="Women" name="Women" value="Women" style={{height:"20px",width:"20px"}} onChange = {handleChange}/>
            <label htmlFor="Women" style={{fontSize:"30px"}}>Women</label>
          </div>
          <div>
            <input type="checkbox" id="Kids" name="Kids" value="Kids" style={{height:"20px",width:"20px"}} onChange = {handleChange}/>
            <label htmlFor="Kids" style={{fontSize:"30px"}}>Kids</label>
          </div>
          
        </div>
        <div style={{display:"flex",flexDirection:"column",border:"solid black 2px",borderRadius:"20px",width:"190px",height:"210px",justifyContent:"center",paddingLeft:"20px",paddingRight:"29px",boxShadow:"7px 7px 0px black"}}>

          <div style={{paddingBottom:"5px"}}>
            <input type="checkbox" id="Topwear" name="Topwear" value="Topwear" style={{height:"20px",width:"20px" }} onChange = {handleChange}/>
            <label htmlFor="Topwear" style={{fontSize:"30px"}}>Topwear</label>
          </div>
          <div style={{paddingBottom:"5px"}}>
            <input type="checkbox" id="Bottomwear" name="Bottomwear" value="Bottomwear" style={{height:"20px",width:"20px"}} onChange = {handleChange}/>
            <label htmlFor="Bottomwear" style={{fontSize:"27.6px"}}>Bottomwear</label>
          </div>
          <div>
            <input type="checkbox" id="Winterwear" name="Winterwear" value="Winterwear" style={{height:"20px",width:"20px"}} onChange = {handleChange}/>
            <label htmlFor="Winterwear" style={{fontSize:"27px"}}>Winterwear</label>
          </div>
          
        </div>
      </div>

      <div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"40px",width:"77vw"}}>
            <h1>See Collections</h1>
            <select name="" id="" style={{fontSize:"25px",height:"50px",borderRadius:"10px",border:"solid grey 3px",cursor:"pointer",backgroundColor:"black",color:"white",textAlign:"center"}} onChange={handleChange2}>
              <option value="" >Sort By</option>
              <option value="increasing" >Increasing price</option>
              <option value="decreasing">Decreasing price</option>
            </select>
        </div>
        <div style={{display:"flex",width:"1600px",gap:"15px",flexWrap:"wrap",marginTop:"10px"}}>

          {
            finalProductList.length > 0 ? (finalProductList.map((item) => (
              <div>
                <Link to={`/product/${item._id}`}><img src={item.image[0]} alt="" className='imag'/></Link>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))):(
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",fontSize:"40px",height:"400px"}}><p>No similar dress found</p></div>
            )
          }
          

        </div>
      </div>
    </div>

    <div>
      <Bottompage />
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Collections