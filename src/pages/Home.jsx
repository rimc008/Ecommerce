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
      <div style = {{display:"flex",flexDirection:"row",justifyContent:"center"}}>

        <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between" ,border:"solid black 4px", borderRadius:"30px",width:"1200px",boxShadow:"13px 13px 0px black"}}>

          <div style = {{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"700px"}}>
            <a href="#latestcollections" className='link1'><h1>New arrival</h1></a>
            <a href="#bestselling" className='link1'><h1>Best sellers </h1></a>
            <h1>For you</h1>
          </div>
          <img src={fashion} alt="" style={{height:"600px",width:"500px",borderRadius:"30px"}}/>

        </div>

      </div>

      
      <div id="latestcollections" style={{paddingTop:"90px"}}>

        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",background:"linear-gradient(to right , transparent 0%, black 25%, black 75%,transparent 100%)"}}>
          <h1 style={{color:"white",margin:7,padding:0}}>Latest Collections</h1>
        </div>
        <LatestCollections/>
      </div>

      <div id="bestselling" style={{paddingTop:"90px"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",borderRadius:"30px",background:"linear-gradient(to right , transparent 0%, black 25%, black 75%,transparent 100%)"}}>
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