import React, { useContext } from 'react'
import {ShopContext} from "../context/ShopContext.jsx"
import './LatestCollections.css'
import { Link } from 'react-router-dom'


const LatestCollections = () => {

    const {products} = useContext(ShopContext)
    console.log(products);
    
    


  return (

    <div style={{display:"flex",justifyContent:"center"}}>


        <div style={{width:"1700px",borderRadius:"30px",paddingTop:"30px",display:"flex",justifyContent:"center"}}>
            <div>

                <div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(5,300px)",justifyItems:"center",gap:"20px",width:"1580px"}}>
                    {products.slice(0,10).map((_,i)=>(
                        <div>
                            <Link to={`/product/${products[i]._id}`}><img src={products[i].image[0]} alt="" className='imag'/></Link>
                            <p>{products[i].name}</p>
                            <p>${products[i].price}</p>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default LatestCollections