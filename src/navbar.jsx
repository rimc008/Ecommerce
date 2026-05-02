import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from './assets/image.png'
import search from './assets/image copy 5.png'
import account from './assets/image copy 4.png'
import { motion,AnimatePresence } from 'framer-motion'
import image2 from './assets/image copy 6.png'


const navLinkStyles = {
    color: "white",
    fontWeight : "bold",
    fontSize:"30px",
    textDecoration:"None",
};
const navLinkStyles1 = {
    color: "black",
    fontWeight : "bold",
    fontSize:"25px",
    textDecoration:"None",
};

const Navbar = ({onSearchChange}) => {

    const [show,setShow] = useState(false);

    const [searchdress,setSearchdress] = useState(false);

    const Search = () =>{
        const scroll = !searchdress
        setSearchdress(scroll)

        if (scroll === true){
            window.scrollTo(0,0)
        }
    }

    const Change = () => {
        setShow(!show)
    }
    return (
        <div style={{position:"sticky",top:"0",zIndex:"1000"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between", maxHeight:"fit-content" , padding:"8px",backgroundColor:"black"}}>

                <img src={image} alt="" style={{height:"65px" ,width:"75px", borderRadius:"15px",marginRight:"150px"}} />    

                <nav style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"35px",marginLeft:"60px"}}>

                    <NavLink to="/" style={navLinkStyles}>Home</NavLink>
                    <NavLink to="/collections" style={navLinkStyles}>Collections</NavLink>
                    <NavLink to="/about" style={navLinkStyles}>About</NavLink>

                </nav>


                <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>

                    <img src={search} alt="" style={{height:"50px" ,width:"55px", borderRadius:"15px",backgroundColor:"black",cursor:"pointer"}} onClick={Search} search = {searchdress}/>

                    <NavLink to="/login" style={navLinkStyles}>Login</NavLink>

                    <NavLink to="/cart"><img src={image2} alt="" style={{height:"70px",width:"70px", borderRadius:"15px",backgroundColor:"black",cursor:"pointer"}}/></NavLink>

                    <img title="Account" onClick={Change} src={account} alt="" style={{height:"60px" ,width:"60px", borderRadius:"15px",cursor:"pointer"}}/>
                        {show && (
                            <div style={{
                            position: "absolute",
                            display: "flex",
                            flexDirection:"column",
                            background: "white",
                            border: "1px solid black",
                            borderRadius:"20px",
                            padding: "10px",
                            top: "100px", 
                            right: "20px",
                            
                            }}>
                                <p><NavLink to="/profile" style={navLinkStyles1}>Profile</NavLink></p>
                                <p><NavLink to="/orders" style={navLinkStyles1}>Orders</NavLink></p>
                                <p><NavLink to="/logout" style={navLinkStyles1}>Logout</NavLink></p>
                            </div>
                        )}
                    

                </div>

            </div>
            <div>
                <AnimatePresence>
                    {searchdress && (

                    <motion.div 
                    initial={{opacity:0,y:20,scale:0.3}}
                    animate={{opacity:1,y:0,scale:1}}
                    exit={{opacity:0,y:20,scale:0.3}}
                    transition={{ duration: 0.1}}
                    style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>


                        <input type="text" placeholder='Search Items' style={{display:"flex",justifyContent:"center",height:"50px",width:"270px",borderRadius:"10px 0px 0px 10px",fontSize:"20px"}} onChange={onSearchChange}/>
                        
                        <NavLink style={{textDecoration:"None"}} to="/collections"><p style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",width:"100px",border:"solid black 3px",color:"#ffff",backgroundColor:"black",paddingTop:0,marginTop:0,borderRadius:"00px 10px 10px 0px",fontSize:"20px"}}>Search</p></NavLink>

                    </motion.div>

                    )}
                </AnimatePresence>
            </div>
            
        </div>
        
        
    )
}

export default Navbar