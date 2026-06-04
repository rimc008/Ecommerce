import React, { useContext } from 'react'
import {ShopContext} from "../context/ShopContext.jsx"
import { Link } from 'react-router-dom'

const BestSelling = () => {

    const {products} = useContext(ShopContext)

  return (

    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center",alignItems:"center"}}>
        {products.slice(5,20).filter((_,i) => i%2 === 0).map((item)=>(
            <div className='herobanner'>
                <Link to={`/product/${item._id}`}><img src={item.image[0]} alt="" className='imag5'/></Link>
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
        ))}
    </div> 
            
  )  
         
}

export default BestSelling