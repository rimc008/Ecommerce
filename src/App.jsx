import { useState,useEffect,useContext } from 'react'
import {ShopContext} from "./context/ShopContext.jsx"
import { Route , Routes } from 'react-router-dom';
import { useParams } from "react-router";
import { Toaster } from "react-hot-toast";

import "./App.css"

import {About,Cart,Collections,Home,Contact,Login,PlaceOrder,Product,Profile,Orders,LatestCollections, Successorder} from './pages';
import Navbar from './navbar';


function App() {

  const {products,objt,setObjt,cart,setCart} = useContext(ShopContext)

    const [firstname,setFirstname] = useState("");

    const [specificaddress,setSpecificaddress] = useState("");
  
    const [pincode,setPincode] = useState("");

    const [phone , setPhone] = useState("")

    let [price,setPrice] = useState(0);

    const [search,setSearch] = useState("");

    const [gettoken,setGettoken] = useState(localStorage.getItem("token"));

    const visual = gettoken ? "Welcome!!" : "Login"

    let [cartload,setCartload] = useState(0);

    const [cartempty,setCartempty] = useState("cart product");

    const [ondelete,setOndelete] = useState(1);

    const token = localStorage.getItem("token")

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
                
                console.log("success");
                
                const newcart = data7.data
                setCart(newcart) 
                setCartempty("cart product") 

              }
      
              else{

                if(data7.message === "Empty Cart"){
                  setCartempty(data7.message)
                }
                
              }
      
            } catch (error) {
              
              console.log(2);
              
              alert(error.message)
            }
      
          }
      
          console.log(cart);
          
          getitemfunction();
          
      
        },[cartload,token,ondelete])//useeffect hook only trigger if the dependency has the potential to re-render the componenet . so , the dependency must be a state variable not a normal variable.

  const collectionNew = (e) =>{
    setSearch(e.target.value);
  }


  return (

    <div>

      <div className='screenresponse' style={{justifyContent:"center",alignItems:"center",height:"125vh",backgroundColor:"black",color:"white",background:"linear-gradient(to right, white 0%, black 5%, black 95%, white 100%)"}}>

        <div style={{textAlign:"center",width:"80%"}}>
          <h1>⚠️ Unsupported Screen Size</h1>
          <p style={{fontSize:"30px"}}>
            This website is optimized for tablets,laptops and desktops.
            Please use a larger screen for the best experience.
          </p>
        </div>

      </div>

      <div style={{background:"linear-gradient(to right, #f4999970 0%, transparent 5%, transparent 95%, #f4999970 100%)"}} className='parent'>

       <Toaster position="top-center" 
       containerStyle={{
            top: "10%",
          }}
       toastOptions={{
          duration: 3000,
          style: {
            boxShadow:"3px 3px 10px black",
            backgroundColor:"white",
            width:"max-content",height:"2%",
            fontWeight: "bold",
            fontSize:"25px",
          },
        }}/> 

      <Navbar onSearchChange={collectionNew} search={search} gettoken={gettoken} setGettoken={setGettoken} visual={visual}/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact firstname={firstname} setFirstname={setFirstname} specificaddress={specificaddress} setSpecificaddress={setSpecificaddress} pincode={pincode} setPincode={setPincode} phone={phone} setPhone={setPhone}/>} />

          <Route path="/cart" element={<Cart price={price} cartempty={cartempty} setPrice={setPrice} ondelete={ondelete} setOndelete={setOndelete}/>} />

          <Route path="/collections" element={<Collections search={search}/>} />

          <Route path="/login" element={<Login visual={visual} setGettoken={setGettoken}/>} />

          <Route path="/placeorder" element={<PlaceOrder price={price} firstname={firstname} specificaddress={specificaddress} pincode={pincode} phone={phone}/>} />

          <Route path="/product/:productId" element={<Product cartload={cartload} setCartload={setCartload}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/latestCollections" element={<LatestCollections/>} />

          <Route path="/successorder" element={<Successorder/>} />
          
          
        </Routes>

      </div>
    </div>
  )
}

export default App
