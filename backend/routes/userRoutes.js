import {userRegister,userlogin,all} from "../controllers/userController.js";
import express from "express"
import {loginlimitter} from "../middleware/ratelimitter.js"

const router = express.Router();


router.post("/register",userRegister)
router.post("/login",loginlimitter,userlogin)
router.get("/all", all)

export default router;


