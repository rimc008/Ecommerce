import React from 'react'
import image1 from "./assets/image.png"
import { div } from 'framer-motion/client'

const Navbar = () => {
  return (

    <div className='flex flex-row justify-center m-1 text-white text-3xl font-bold sticky top-0 z-[1200]'>
        <div className='flex flex-row justify-between w-700 border-3 rounded-xl border-black bg-black p-3'>
            <img className="h-15 w-15 rounded-xl" src={image1} alt="" />

            <div className='flex flex-col justify-center'>
            <h1>Admin Pannel</h1>
            </div>

            <div className='flex flex-col justify-center'>
            <p>Login</p>
            </div>

        </div>
    </div>
  )
}

export default Navbar