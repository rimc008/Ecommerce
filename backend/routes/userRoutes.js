import {userRegister,userlogin,all} from "../controllers/userController.js";
import express from "express"

const router = express.Router();


router.post("/register",userRegister)
router.post("/login",userlogin)
router.get("/all", all)

export default router;


