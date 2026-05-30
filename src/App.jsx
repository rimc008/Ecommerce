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
    <div style={{background:"linear-gradient(to right, pink 0%, transparent 5%, transparent 95%, pink 100%)"}}>

    <Navbar onSearchChange={collectionNew} search={search} setGettoken={setGettoken} visual={visual}/>

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
  )
}

export default App
