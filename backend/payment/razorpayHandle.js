import razorpayInstance from "../config/razorpay.js";
import crypto from "crypto";
import Ordered1 from "../models/orderedProduct.js";


//create-order
export const razorpaydetails = async(req,res) => {

    try {
        const {amount} = req.body;

        const options = {
            amount : amount*100,
            currency : "INR",
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpayInstance.orders.create(options);

        res.json({success:true,order});

    } catch (error) {
        res.json({success:false,message:error.message});
    }
    
}

//verify-order
export const verifyorder = async (req, res) => {

  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      id
    } = req.body;

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic =
      expectedSignature === razorpay_signature;

    if (isAuthentic) {

        await Ordered1.updateMany(

            { id },

            {
                $set:{
                    status:"Payment Verified"
                }
            }

        )

      // Update database here
      // payment = true
      // status = "Confirmed"

      return res.json({
        success: true,
        message: "Payment Verified"
      });

    } else {

      return res.status(400).json({
        success: false,
        message: "Invalid Signature"
      });

    }

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};