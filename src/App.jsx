import { useState } from 'react'
import { Route , Routes } from 'react-router-dom';
import { useParams } from "react-router";

import {About,Cart,Collections,Home,Contact,Login,PlaceOrder,Product,Profile,Orders,LatestCollections} from './pages';
import Navbar from './navbar';

import './App.css'

function App() {

  const [search,setSearch] = useState("");

  const collectionNew = (e) =>{
    setSearch(e.target.value);
  }

  return (
    <div>

      <Navbar onSearchChange={collectionNew} search={search}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections search={search}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/latestCollections" element={<LatestCollections/>} />
        
        
      </Routes>

    </div>
  )
}

export default App
