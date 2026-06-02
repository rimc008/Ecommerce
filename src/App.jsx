import { useState,useEffect } from 'react'
import { Route , Routes } from 'react-router-dom';
import { useParams } from "react-router";

import "./App.css"

import {About,Cart,Collections,Home,Contact,Login,PlaceOrder,Product,Profile,Orders,LatestCollections, Successorder} from './pages';
import Navbar from './navbar';


function App() {

    const [firstname,setFirstname] = useState("");

    const [specificaddress,setSpecificaddress] = useState("");
  
    const [pincode,setPincode] = useState("");

    const [phone , setPhone] = useState("")

    let [price,setPrice] = useState(0);

    const [search,setSearch] = useState("");

    const [gettoken,setGettoken] = useState(localStorage.getItem("token"));

    const visual = gettoken ? "Welcome!!" : "Login"


  const collectionNew = (e) =>{
    setSearch(e.target.value);
  }


  return (

    <div>

      <div className='screenresponse' style={{justifyContent:"center",alignItems:"center",height:"125vh",backgroundColor:"black",color:"white",background:"linear-gradient(to right, #f911ca 0%, black 5%, black 95%, #f911ca 100%)"}}>

        <div style={{textAlign:"center",width:"80%"}}>
          <h1>⚠️ Unsupported Screen Size</h1>
          <p style={{fontSize:"30px"}}>
            This website is optimized for tablets,laptops and desktops.
            Please use a larger screen for the best experience.
          </p>
        </div>

      </div>

      <div style={{background:"linear-gradient(to right, #f4999970 0%, transparent 5%, transparent 95%, #f4999970 100%)"}} className='parent'>

      <Navbar onSearchChange={collectionNew} search={search} gettoken={gettoken} setGettoken={setGettoken} visual={visual}/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact firstname={firstname} setFirstname={setFirstname} specificaddress={specificaddress} setSpecificaddress={setSpecificaddress} pincode={pincode} setPincode={setPincode} phone={phone} setPhone={setPhone}/>} />

          <Route path="/cart" element={<Cart price={price} setPrice={setPrice}/>} />

          <Route path="/collections" element={<Collections search={search}/>} />

          <Route path="/login" element={<Login visual={visual} setGettoken={setGettoken}/>} />

          <Route path="/placeorder" element={<PlaceOrder price={price} firstname={firstname} specificaddress={specificaddress} pincode={pincode} phone={phone}/>} />

          <Route path="/product/:productId" element={<Product/>} />
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
