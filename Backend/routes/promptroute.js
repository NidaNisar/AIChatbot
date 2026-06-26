const {prompt,getprompt,responep}=require('../controllers/Prompt')
 const express = require("express");
const router = express.Router();



router.post("/prompt", prompt);
router.get("/getprompt",getprompt);
router.post("/getrespone",responep)

module.exports=router