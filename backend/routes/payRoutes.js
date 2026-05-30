import express from "express"
import { razorpaydetails, verifyorder } from "../payment/razorpayHandle.js";

const router = express.Router();

router.post("/create-order",razorpaydetails)
router.post("/verify-order",verifyorder)

export default router