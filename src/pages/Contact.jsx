import React, { useEffect, useState } from 'react'
import './LatestCollections.css'
import { NavLink } from 'react-router-dom';
import Bottompage from './Bottompage';
import { div, p } from 'framer-motion/client';
import { motion,AnimatePresence } from 'framer-motion'

const navLinkStyles5 = {
    fontSize:"25px",
    textDecoration:"None",
    borderRadius:"10px",
    fontFamily:"Prata",
    width:"50%"   
};

const navLinkStyles6 ={
  borderBottom:"solid black 2px",
  paddingBottom:"25px"
}

const Contact = ({firstname,setFirstname,specificaddress,setSpecificaddress,pincode,setPincode,phone,setPhone}) => {

  const [fetching,setFetching] = useState(false);

  const [coords,setCoords] = useState(null);

  const [address,setAddress] = useState("");

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const handleChange7 = () => {

    setFetching(true)
    navigator.geolocation.getCurrentPosition(

       async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setCoords({lat , lng})

        try {

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          )

          const data = await res.json();

          setAddress(data.address);
          setPincode(data.address.postcode);
          setSpecificaddress(data.display_name)

        } catch (error) {
          console.log(error);
          setFetching(false)
          
        }
        finally{
          setFetching(false)
        }
      }
      
    )
  }

  console.log(address);
  

  return (

    <AnimatePresence>
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3}}
        onAnimationComplete={() => window.scrollTo(0,0)}>
      <div style={{fontSize:"30px",display:"flex",justifyContent:"center"}}>

        <div style={{width:"70%"}}>

        <div style={{textAlign:"center",borderBottom:"solid black 3px"}}>
          <h3>Shipping Address</h3>
        </div>

        <div style={{display:"flex",justifyContent:"center",marginTop:"20px",paddingBottom:"20px"}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"300px",height:"50px",fontSize:"25px",borderRadius:"10px",backgroundColor:"Black",color:"white"}} className='imag3'onClick={handleChange7}>

            <h4 style={{margin:0}}>Use Current Location</h4>

          </div>
        </div>
        <div style={{textAlign:"center",borderBottom:"solid black 2px"}}>
          {fetching && <h4>Fetching Location...</h4>}
        </div>

        <form action="#" method="post" style={{display:"flex",flexDirection:"column",gap:"20px",marginTop:"40px"}}>

          <div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid black 2px",
    paddingBottom:"25px"}}>
            <div>
              <label htmlFor="firstname"> First Name: </label>

            
              <input type="text" id='firstname' name='firstname' style={navLinkStyles5} placeholder='First Name' value={firstname} onChange={(e) => setFirstname(e.target.value)}required/>
              
            </div>

            <div>
              <label htmlFor="lastname"> Last Name: </label>
              <input type="text" id='lastname' name='lastname' style={navLinkStyles5} placeholder='Last Name' required/>
            </div>
          </div>

          <div style={navLinkStyles6}>
              <label htmlFor="country"> Country: </label>
              <input type="text" value={address.country} id='country' name='country' style={navLinkStyles5} placeholder='Country'/>
          </div>

          <div style={navLinkStyles6}>
              <label htmlFor="city"> City: </label>
              <input type="text" value={address.city} id='city' name='city' style={navLinkStyles5} placeholder='City' required/>
          </div>

          <div style={navLinkStyles6}>
              <label htmlFor="state"> State: </label>
              <input type="text" value={address.state} id='state' name='state' style={navLinkStyles5} placeholder='state'/>
          </div>

          <div style={navLinkStyles6}>
            <label htmlFor="phone"> Ph. no.: </label>
            <input type="text" id='phone' name='phone' value={phone} style={navLinkStyles5} placeholder='Phone Number' onChange={(e)=> setPhone(e.target.value)} required/>
          </div>

          <div style={navLinkStyles6}>
            <label htmlFor="email"> Email: </label>
            <input type="email" name="email" id="email" style={navLinkStyles5} placeholder='email'/>
          </div>

          <div style={navLinkStyles6}>
            <label htmlFor="address">Address: </label>
            <input value={specificaddress} type="text" name='address' id='address' style={{fontSize:"25px",textDecoration:"None",borderRadius:"10px",width:"80%",fontFamily:"Prata"}} placeholder='Your address' required/>
          </div>

          <div style={navLinkStyles6}>
            <label htmlFor="pin">Pin Code: </label>
            <input type="text" value={pincode} name='pin' id='pin' style={navLinkStyles5} placeholder='Pin Code' required/>
          </div>

          <div style={navLinkStyles6}>
            <label htmlFor="location">Nearest location: </label>
            <input type="text" name='location' id='location' style={navLinkStyles5} placeholder='Nearest Location'/>
          </div>

          <div  style={{display:"flex",justifyContent:"center",gap:"30px",marginTop:"20px"}}>

            <button className="imag3" type="submit" style={{width:"250px",fontSize:"25px",borderRadius:"10px",backgroundColor:"Black",height:"50px",color:"white",fontFamily:"Prata"}}>Confirm Address</button>

            <NavLink to="/placeorder">
              <button className="imag3" style={{width:"250px",height:"50px",fontSize:"25px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontFamily:"Prata"}}>Procced To Pay</button>
            </NavLink>

          </div>

        </form>
        
        </div>

      </div>

      <div>
        <Bottompage />
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Contact