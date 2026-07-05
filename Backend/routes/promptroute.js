const {prompt,getprompt,responep}=require('../controllers/Prompt')
 const express = require("express");
 const  {gemini,getgemini,deleteg}  = require("../controllers/Gemni")
const router = express.Router();

router.delete("/deletee",deleteg)
router.post("/gemini",gemini)
router.get("/getgemini",getgemini)
router.post("/prompt", prompt);
router.get("/getprompt",getprompt);
router.post("/getrespone",responep)

module.exports=router