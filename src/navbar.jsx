import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import image from './assets/image.png'
import search from './assets/image copy 5.png'
import account from './assets/image copy 4.png'
import { motion,AnimatePresence } from 'framer-motion'
import image2 from './assets/image copy 6.png'
import { ShopContext } from './context/ShopContext'
import { p } from 'framer-motion/client'



const navLinkStyles = {
    color: "white",
    fontWeight : "bold",
    fontSize:"30px",
    textDecoration:"None",
    borderBottom:"4px solid black",
    transition:"all 0.2s ease-in-out"
};
const navLinkStyles1 = {
    color: "black",
    fontWeight : "bold",
    fontSize:"25px",
    textDecoration:"None",
    cursor:"pointer"
};

const navLinkStyles2 = {
    color: "white",
    fontWeight : "bold",
    fontSize:"30px",
    paddingBottom:"2px",
    textDecoration:"None",
    borderBottom:"solid red 4px",
    transition:"all 0.2s ease-in-out",
    cursor:"pointer"
};

const Navbar = ({onSearchChange,gettoken,visual,setGettoken}) => {

    const {cart} = useContext(ShopContext);
    
    const [select,setSelect] = useState(0)
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

            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between", maxHeight:"max-content" , padding:"8px",backgroundColor:"black"}}>

                <div>
                    <img src={image} alt="" style={{height:"65px" ,width:"75px", borderRadius:"15px",marginRight:"150px"}} /> 
                </div>   

                <div style={{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",gap:"35px",justifyContent:"center"}}>

                    <NavLink to="/" onClick={() => setSelect(1)} style={select===1 ?navLinkStyles2 : navLinkStyles}>Home</NavLink>
                    <NavLink to="/collections" onClick={() => setSelect(2)} style={select===2 ?navLinkStyles2 : navLinkStyles}>Collections</NavLink>
                    <NavLink to="/about" onClick={() => setSelect(3)} style={select===3 ?navLinkStyles2 : navLinkStyles}>About</NavLink>

                </div>


                <div style={{flexShrink:1,flexBasis:"18%",display:"flex",gap:"5px",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center"}}>

                    <img src={search} alt="" style={{height:"50px" ,width:"auto", borderRadius:"15px",backgroundColor:"black",cursor:"pointer"}} onClick={Search} search = {searchdress}/>

                    <div>
                        {(visual === "Login")?<NavLink onClick={() => setSelect(4)} to="/login" style={select===4 ?navLinkStyles2 : navLinkStyles}>{visual}</NavLink>:
                        <div style={{color:"#ec4899",fontSize:"31px",fontWeight:"bold"}}>{visual}</div>}
                    </div>

                    <NavLink to="/cart">
                    
                    <div style={{position:"relative"}}><img src={image2} alt="" style={{height:"70px",width:"auto", borderRadius:"15px",backgroundColor:"black",cursor:"pointer"}}/>

                        <div style={{position:"absolute",borderRadius:"50%",height:"20px",width:"20px",backgroundColor:"#5af26b",color:"black",textAlign:"center",top:10,right:10,fontWeight:"bold"}}>{cart.length}</div>

                    </div>

                    </NavLink>

                    <img title="Account" onClick={Change} src={account} alt="" style={{height:"60px" ,width:"auto", borderRadius:"15px",cursor:"pointer"}}/>

                    {(
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
                        transition: "all 0.3s ease",
                        opacity: show ? 1 : 0,

                        //for max-content or auto transition don't work very properly
                        height:show ? gettoken ? "200px" : "130px" :" 0px",
                         overflow: "hidden"
                        
                        }}>
                            <p><NavLink to="/profile" style={navLinkStyles1}>Profile</NavLink></p>
                            <p><NavLink to="/orders" style={navLinkStyles1}>Orders</NavLink></p>

                            {gettoken?
                            <p style={navLinkStyles1} onClick={() => {localStorage.removeItem("token")
                                alert("Logged out")
                                setGettoken(localStorage.getItem("token"))
                            }}>Logout</p>:
                            null
                            }
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
                    exit={{opacity:0,y:20,scale:0.7}}
                    transition={{ duration: 0.3}}
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