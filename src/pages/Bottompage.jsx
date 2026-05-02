import React from 'react'
import support from "../assets/support_img.png"
import quality from "../assets/quality_icon.png"
import exchange from "../assets/exchange_icon.png"
import image from "../assets/image.png"
import { NavLink } from 'react-router-dom'

const navLinkStyles = {
    color: "white",
    textDecoration:"None",
};

const Bottompage = () => {
  return (

    <div>
        <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"100px"}}>
            <div style={{display:"flex",flexDirection:"column",width:"400px",alignContent:"center",alignItems:"center"}}>
                <img src={exchange} alt="" style={{height:"50px",width:"50px"}}/>

                
                <h2 style={{paddingBottom:0,marginBottom:0}}>Easy Exchhange Policy</h2>
                <p>We offer hassle free exchange</p>
                

            </div>
            <div style={{display:"flex",flexDirection:"column"
                ,width:"400px",alignContent:"center",alignItems:"center"}}>
                <img src={quality} alt="" style={{height:"50px",width:"50px"}}/>
                <h2 style={{paddingBottom:0,marginBottom:0}}>7 Days Refund Policy</h2>
                <p>We provide 7 days refund policy</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",width:"400px",alignContent:"center",alignItems:"center"}}>
                <img src={support} alt="" style={{height:"50px",width:"50px"}}/>
                <h2 style={{paddingBottom:0,marginBottom:0}}>Best Customer Support</h2>
                <p>we provide 24/7 support</p>
            </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",paddingTop:"100px",paddingBottom:"100px"}}>
            <h1>Subscribe now & get 20% off</h1>
            <p>Enter your email to subscribe</p>
            <div style={{display:"flex"}}>
                <input type="text" placeholder='Enter your email' style={{display:"flex",justifyContent:"center",height:"40px",width:"270px",borderRadius:"10px 0px 0px 10px",fontSize:"20px"}} />
                
                <NavLink to="/contact"><p style={{display:"flex",justifyContent:"center",alignItems:"center",height:"40px",width:"100px",border:"solid black 3px",color:"#ffff",backgroundColor:"black",paddingTop:0,marginTop:0,borderRadius:"00px 10px 10px 0px"}}>Subscribe</p></NavLink>
            </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-around",paddingTop:"50px" , backgroundColor:"black",color:"white",paddingBottom:"50px"}}>
            <div style={{display:"flex",flexDirection:"column",width:"700px",}}>
                <img src={image} alt="" style={{height:"70px",width:"70px"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem doloremque temporibus veritatis magni quia, tempora quisquam possimus maxime nobis?</p>
            </div>

            <div style={{display:"flex",gap:"70px"}}>
                <div>
                    <h2>COMPANY</h2>
                    <NavLink to="/" style={navLinkStyles} onClick={() => window.scrollTo(0,0)}><p>Home</p></NavLink>
                    <NavLink to="/about" style={navLinkStyles}><p>About us</p></NavLink>
                    <p>Delivery</p>
                    <p>Privacy policy</p>
                </div>

                <div>
                    <h2>GET IN TOUCH</h2>
                    <p>+1-222-555-8888</p>
                    
                </div>
            </div>

        </div>
    </div>

    
  )
}

export default Bottompage