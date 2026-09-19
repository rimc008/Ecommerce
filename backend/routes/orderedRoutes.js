import express from "express";
import { addorderedproduct, seeorderedproducts } from "../controllers/orderdControllers.js";
import { verifyToken } from "../middleware/tokenVerify.js";

const router = express.Router();

router.post("/addordered",verifyToken,addorderedproduct);
router.get("/all3",verifyToken,seeorderedproducts);

export default router