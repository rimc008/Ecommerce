import React from 'react'
import fashion from "../assets/image copy 3.png"
import LatestCollections from './LatestCollections'
import BestSelling from './BestSelling'
import Bottompage from './Bottompage'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './LatestCollections.css'


const navLinkStyles = {
    color: "#0e0e0e",
    textDecoration:"None",
};

const Home = () => {
  return (

    <AnimatePresence>
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => window.scrollTo({top:0,behavior:"smooth" })}>
        

      <div style={{paddingTop:"100px"}}>
        </div> 
      <div style = {{display:"flex",flexDirection:"row",flexShrink:1,justifyContent:"center",height:"20%"}}>

        <div style = {{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between" ,border:"solid black 4px", borderRadius:"30px",width:"65%",boxShadow:"13px 13px 0px black",height:"60%"}}>

          <div style = {{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className='bannertext'>
            <a href="#latestcollections" className='link1'><h1>New arrival</h1></a>
            <a href="#bestselling" className='link1'><h1>Best sellers </h1></a>
            
          </div>
          <img src={fashion} alt="" style={{display:"flex",flexShrink:1,borderRadius:"30px"}} className='banner'/>

        </div>

      </div>

      
      <div id="latestcollections" style={{paddingTop:"90px"}}>

        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",background:"linear-gradient(to right , transparent 0%, black 25%, black 75%,transparent 100%)"}}>
          <h1 style={{color:"white",margin:7,padding:0}}>Latest Collections</h1>
        </div>
        <LatestCollections/>
      </div>

      <div id="bestselling" style={{paddingTop:"90px"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",background:"linear-gradient(to right , transparent 0%, black 25%, black 75%,transparent 100%)"}}>
          <h1 style={{color:"white",padding:0,margin:7}}>BestSeller</h1>
        </div>
        <div style={{paddingTop:"20px"}}><BestSelling/></div>
      </div>

      <div>
        <Bottompage/>
      </div>
    </motion.div>
    </AnimatePresence>
    

  )
}

export default Home