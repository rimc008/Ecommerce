import React from 'react'
import { assets } from './assets/assets.js'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

  const data = [{
        image:assets.add_icon , text:"Add Items"
    },{
        image:assets.order_icon , text:"List Items"
    },{
        image:assets.order_icon , text:"Orders"
    },]  
    
  return (

    <div className='sticky top-23 z-[1000]'>
        <div className='flex flex-col pt-40 items-end bg-gray-400 rounded-xl border-3 h-215 w-70 ml-1 pr-7 gap-7 text-xl'>

            {data.map((item) => (
                <NavLink to={`${item.text.toLowerCase().split(" ")[0]}`}>
                <div className='flex flex-row gap-3 pl-7 border shadow-[5px_5px_0px_0px_black] bg-white rounded-xl border-3 pt-2 pb-2 w-50 cursor-pointer hover:scale-105 transition'>
                    
                    <img src={item.image} alt="" />
                    <p className='mt-1'>{item.text}</p>
                </div>
                </NavLink>
            ))}

        </div>
    </div>
  )
}

export default Sidebar