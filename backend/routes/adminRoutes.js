import express from "express";
import { adminlogin } from "../controllers/admincontroller.js";
import { addadminproduct, deleteitem, deletesingleitem, getadminitems ,updateitems} from "../controllers/adminProductController.js";
import upload from "../middleware/multer.js";

const router = express.Router()

router.post("/adminlogin",adminlogin)
router.post("/addparentitems",upload.array("image"),addadminproduct)
router.get("/all2",getadminitems)
router.delete("/deleteall",deleteitem)
router.delete("/deletesingleitem",deletesingleitem)
router.patch("/patch",updateitems)

export default router;

