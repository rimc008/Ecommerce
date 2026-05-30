import express from "express";
import { addorderedproduct, seeorderedproducts } from "../controllers/orderdControllers.js";

const router = express.Router();

router.post("/addordered",addorderedproduct);
router.get("/all3",seeorderedproducts);

export default router