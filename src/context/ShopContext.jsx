import React from 'react'
import { createContext,useState,useEffect } from 'react'
import { jsx } from 'react/jsx-runtime';

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => {

    const [products,setProducts] = useState(()=> {
        try{
        const storedItems1 = localStorage.getItem("products");
        return storedItems1 ? JSON.parse(storedItems1) : [];
        }
        catch{
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products]);

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

    useEffect(()=> {
        const fetchproducts = async() => {
            try {
                const res = await fetch("http://localhost:4001/api/admin/all2",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    },
                }) 

                const data = await res.json()

                if (data.success) {
                    const nextproducts = data.data4
                    setProducts(nextproducts)
    
                }
                else{
                    console.log(data.message);
                    
                }
            } catch (error) {
                console.log(error.message);
                
            }
        }

        fetchproducts()
    },[])


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