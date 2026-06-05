import { addProduct,deleteProduct,all1,all11,deleteallproduct } from "../controllers/productController.js";
import express from "express";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/tokenVerify.js";

const router = express.Router();

router.post("/additem",verifyToken,addProduct);
router.get("/all1",verifyToken,all1);
router.get("/all11",all11)
router.delete("/deleteitem",deleteProduct);
router.delete("/deleteall",deleteallproduct)


export default router