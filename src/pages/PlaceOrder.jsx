import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import './LatestCollections.css'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = ({price,firstname,specificaddress,pincode,phone}) => {

  const [paymentmethod,setPaymentmethod] = useState("")
  const navigate = useNavigate()

  let createordercondition = false

const handleChange15 = async() => {

  const orderGroupId = Date.now().toString();

  try {

    // 1. Fetch cart products
    const res1 = await fetch(
      "http://localhost:4001/api/product/all1",
      {
        method:"GET",

        headers : {
          "Content-Type":"application/json"
        }
      }
    );

    const data1 = await res1.json();

    if(data1.success){

      // 2. Save ordered products
      for (const item of data1.data) {

        try {

          const res = await fetch(
            "http://localhost:4001/api/order/addordered",
            {

              method:"POST",

              headers : {
                "Content-Type":"application/json"
              },

              body: JSON.stringify({
                productname:item.name,
                firstname,
                size:item.size,
                price:item.price,
                image:item.image[0],
                address:specificaddress,
                zipcode:pincode,
                phone,
                paymentmethod,
                status:"Payment pending",
                id:orderGroupId
              })

            }
          );

          const data2 = await res.json();

          if(data2.success){
            
            createordercondition = true;
          }
          else{
            console.log(data2.message);
            
          }

        }

        catch(error){
          console.log(error.message);
        }

      }

    }

    // 3. Create Razorpay order
    if(createordercondition && paymentmethod==="razorpay"){

      const razorpayResponse = await fetch(
        "http://localhost:4001/api/pay/create-order",
        {

          method:"POST",

          headers : {
            "Content-Type":"application/json"
          },
          body:JSON.stringify({amount: price+10})

        }
      );

      const razorpayData =
        await razorpayResponse.json();

      if(razorpayData.success){

        const options = {

           key: "rzp_test_SrIVRZZw2R5xpM",

            amount: (price + 10) * 100,

            currency: "INR",

            description: "Order Payment",
            
            order_id:razorpayData.order.id,

          handler: async function(response) {

            // 4. Verify payment
            const responserazor = await fetch(
              "http://localhost:4001/api/pay/verify-payment",
              {

                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({...response , id : orderGroupId})

              }
            );

            const data4 = await responserazor.json() ;

            if (data4.success){
              navigate("/successorder")
            }

          }

        };

        const rzp =
          new window.Razorpay(options);

        rzp.open();

      }

    }

    else if(createordercondition && paymentmethod==="cod"){

      navigate("/successorder")
    }

  }

  catch(error){

    console.log(error.message);

  }

}


  return (
    <div style={{border:"solid black 3px",height:"118vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <h1 style={{textAlign:"center",marginBottom:"50px"}}>Order Amount</h1>

      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{border:"solid black 3px",borderRadius:"15px",padding:"40px",boxShadow:"10px 10px 0px 0px black"}}>
        <div style={{marginBottom:"50px",fontSize:"25px"}}>
          <div style={{width:"400px",display:"flex",justifyContent:"space-between",borderBottom:"solid black 2px"}}>
            <p>Cart total</p>
            <p>${price}.00</p>
          </div>
          <div style={{width:"400px",display:"flex",justifyContent:"space-between",borderBottom:"solid black 2px"}}>
            <p>Shipping fee</p>
            <p>$10.00</p>
          </div>
          <div style={{width:"400px",display:"flex",justifyContent:"space-between",borderBottom:"solid black 2px",fontWeight:"bold"}}>
            <p>Total</p>
            <p>${price + 10}.00</p>
          </div>
        </div>
        <p style={{fontSize:"20px",margin:0,padding:0,fontWeight:"bolder",textAlign:"center"}}>PAYMENT METHOD</p>

        <div style={{display:"flex",justifyContent:"center",gap:"40px",marginTop:"30px"}}>
          <p style={{border:(paymentmethod==="razorpay")?"solid #e80f7b 3px":"solid black 3px",width:"120px",textAlign:"center",height:"45px",display:"flex",flexDirection:"column",justifyContent:"center",borderRadius:"10px",cursor:"pointer"}}onClick={() => setPaymentmethod("razorpay")}>

            <img src={assets.razorpay_logo} style={{height:"25px"}} alt=""/>
          </p>

          <p style={{border:(paymentmethod==="cod")?"solid #f9047f 3px":"solid black 3px",width:"120px",textAlign:"center",borderRadius:"10px",cursor:"pointer"}} onClick={() => setPaymentmethod("cod")}>Cash On Delivery</p>
        </div>
        </div>

        <div>
          <p style={{height:"fit-content",width:"170px",fontSize:"30px",border:"solid black 2px",borderRadius:"10px",textAlign:"center",color:"white",backgroundColor:"black"}}className='imag' onClick={handleChange15}>Order Now</p>
        </div>
      </div>


    </div>
  )
}

export default PlaceOrder