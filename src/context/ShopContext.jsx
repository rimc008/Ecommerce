import React from 'react'
import { createContext,useState,useEffect } from 'react'
import {products} from "../assets/assets.js"
import { jsx } from 'react/jsx-runtime';

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => {

    const [objt,setObjt] = useState({})
    const [cart,setCart] = useState(() => {

        try{
        const storedItems = localStorage.getItem("cart");
        return storedItems ? JSON.parse(storedItems) : [];
        }
        catch{
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const currency = "$"
    const delivery_fee = 10

    const value = { products , currency , delivery_fee , objt , setObjt , cart , setCart}

    return (
        <ShopContext.Provider value={value}> 

            {props.children}

        </ShopContext.Provider>
    )
}

export default ShopContextProvider