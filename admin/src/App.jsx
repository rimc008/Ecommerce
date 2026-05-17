import React, { useEffect, useState } from 'react'
import Adminhome from './pages/adminhome'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/add'
import Product from './pages/product'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Login from './pages/login'
import List from './pages/list'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {

   const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [triggerkey,setTriggerkey] = useState(false)

  const trigger = () => {
    setTriggerkey(!triggerkey)
  }

  return (
    <div>
      
      {(token === "") ?
      <div><Login setToken={setToken}/></div> :
        <div>

          <ToastContainer />
          <Navbar/>

          <div className='grid grid-cols-[0.33fr_2fr]'>

            <div>
              <Sidebar/>
            </div>

            <div>
              <Routes>

                <Route path="/" element={<Adminhome/>} />
                <Route path="/add" element={<Add trigger={trigger}/>} />
                <Route path="/orders" element={<Product/>} />
                <Route path="/list" element={<List triggerkey={triggerkey}/>} />

              </Routes>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default App