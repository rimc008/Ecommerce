import React from 'react'
import Adminhome from './pages/adminhome'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/add'
import Product from './pages/product'

const App = () => {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Adminhome/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/product" element={<Product/>} />

      </Routes>
    </div>
  )
}

export default App