const express=require('express');
const promptmodel = require('../model/promptt');
const { GoogleGenAI } = require("@google/genai");


const gemini= async(req,res)=>{
 
   try {
       const {question}=req.body
       const aiclient= new GoogleGenAI({
        apikey:process.env.GEMINI_API_KEY
       })
     const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        content:question,
     })
     res.json({
        success:true,
        reply:response.text
     })
   } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      err: error,
    });

}
}
module.exports=gemini