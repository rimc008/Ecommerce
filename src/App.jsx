import { useState } from 'react'
import { Route , Routes } from 'react-router-dom';
import { useParams } from "react-router";

import {About,Cart,Collections,Home,Contact,Login,PlaceOrder,Product,Profile,Orders,LatestCollections} from './pages';
import Navbar from './navbar';

import './App.css'

function App() {

  const [search,setSearch] = useState("");

  const [visual,setVisual] = useState("Login")

  const collectionNew = (e) =>{
    setSearch(e.target.value);
  }

  const visualChange = () => {
    setVisual("Welcome!!")
  }

  return (
    <div>

      <Navbar onSearchChange={collectionNew} search={search} visual={visual}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/collections" element={<Collections search={search}/>} />
        <Route path="/login" element={<Login loginvisual={visualChange} visual={visual}/>} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/latestCollections" element={<LatestCollections/>} />
        
        
      </Routes>

    </div>
  )
}

export default App
