const express=require("express");
const router=express.Router();
router.route("../products").get(getAllProducts);

moudule.export=router