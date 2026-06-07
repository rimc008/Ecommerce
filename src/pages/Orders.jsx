import React, { useEffect, useState } from 'react'
import Bottompage from './Bottompage'
import { div } from 'framer-motion/client'

const Orders = () => {

  const [orders,setOrders] = useState([])
  const [ordernumber,setOrdernumber] = useState(true)

  useEffect(()=> {

    const handleChange18 = async() => {

      console.log("useeffect");
      
      try {
        const res = await fetch("http://localhost:4001/api/order/all3",
          {
            method:"GET",
            headers : {
            "Content-Type":"application/json",
            Authorization : `Bearer ${localStorage.getItem("token")}`
            }
          }
        )

        const data = await res.json()

        if (data.sucess) {

          let nextorders = data.data8

          console.log(nextorders);

          setOrdernumber(true);
          
          setOrders(nextorders)
        }

        else{
          setOrdernumber(false)
        }
      } catch (error) {
        alert(error.message) 
      }
    }

    handleChange18()
  },[])

  return (

    <div style={{height:"100%"}}>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"20px"}}>

      <div>
        <h1>Your Orders</h1>
      </div>


      { localStorage.getItem("token") ?
      <div style={{display:"flex",justifyContent:"space-around",fontSize:"25px",fontWeight:"bold",paddingTop:"20px",paddingBottom:"20px",paddingTop:"20px",borderBottom:"solid black 3px",borderTop:"solid black 3px",background: "linear-gradient(to right,transparent 0%, #f90303ae 15%, #f90303ae 85%,transparent 100%)",}} className='container7'>
        <div style={{width:"450px",display:"flex",justifyContent:"center"}}>Product</div>
        <div style={{width:"100px",display:"flex",justifyContent:"center"}}>Price</div>
        <div style={{width:"150px",display:"flex",justifyContent:"center"}}>Pay Method</div>
        <div style={{width:"250px",display:"flex",justifyContent:"center"}}>Pay Status</div>
      </div>:
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}>
        <h1>Please log in or sign up first.</h1>
      </div>
      }

      {localStorage.getItem("token") ? ordernumber ?
      
      <div style={{width:"90%"}}>
      {
        orders.map((item) => (
          <div style={{display:"flex",justifyContent:"space-around",paddingTop:"20px",paddingBottom:"20px",borderBottom:"solid black 2px"}}>

            <div style={{display:"flex",width:"450px",gap:"20px"}}>
              <img src={item.image} alt="" style={{height:"100px",width:"90px",borderRadius:"15px"}}/>

              <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <p style={{margin:0,padding:0}}>{item.productname}</p>
                <p style={{margin:0,padding:0}}>{item.size}</p>
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100px"}}>
              {item.price}
            </div>

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"150px",textAlign:"center"}}>
              {item.paymentmethod}
            </div>

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"250px"}}>
              {item.status}
            </div>
          </div>
        ))
      }
      </div>:
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}>
        <h1>No Order Yet</h1>
      </div>
      : null}

    </div>
    <div>
      <Bottompage/>
    </div>

    </div>
  )
}

export default Orders