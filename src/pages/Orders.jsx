import React, { useEffect, useState } from 'react'

const Orders = () => {

  const [orders,setOrders] = useState([])

  useEffect(()=> {

    const handleChange18 = async() => {

      console.log("useeffect ");
      
      try {
        const res = await fetch("http://localhost:4001/api/order/all3",
          {
            method:"GET",
            headers : {
            "Content-Type":"application/json"
            }
          }
        )

        const data = await res.json()

        if (data.sucess) {

          let nextorders = data.data8

          console.log(nextorders);
          
          setOrders(nextorders)
        }

        else{
          alert(data.message)
        }
      } catch (error) {
        alert(error.message) 
      }
    }

    handleChange18()
  },[])

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"20px"}}>

      <div>
        <h1>Your Orders</h1>
      </div>

      <div style={{display:"flex",justifyContent:"space-around",width:"1400px",fontSize:"25px",fontWeight:"bold",paddingTop:"20px",paddingBottom:"20px",paddingTop:"20px",borderBottom:"solid black 3px",borderTop:"solid black 3px",background: "linear-gradient(to right,transparent 0%,pink 15%,pink 85%,transparent 100%)"}}>
        <div style={{width:"450px",display:"flex",justifyContent:"center"}}>Product</div>
        <div style={{width:"100px",display:"flex",justifyContent:"center"}}>Price</div>
        <div style={{width:"150px",display:"flex",justifyContent:"center"}}>Pay Method</div>
        <div style={{width:"250px",display:"flex",justifyContent:"center"}}>Pay Status</div>
      </div>

      {
        orders.map((item) => (
          <div style={{display:"flex",justifyContent:"space-around",paddingTop:"20px",paddingBottom:"20px",borderBottom:"solid black 2px",width:"1400px"}}>

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

    </div>
  )
}

export default Orders