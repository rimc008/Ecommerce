import { addProduct,deleteProduct,all1 } from "../controllers/productController.js";
import express from "express";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/tokenVerify.js";

const router = express.Router();

router.post("/additem",verifyToken,addProduct);
router.post("/deleteitem",deleteProduct);
router.get("/all1", all1);
router.delete("/deleteitem",deleteProduct);


export default router