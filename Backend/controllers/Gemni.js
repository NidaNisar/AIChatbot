const express=require('express');
const promptmodel = require('../model/promptt');
const { GoogleGenAI } = require("@google/genai");


const gemini= async(req,res)=>{
 
   try {
       const {question}=req.body
       const userC= await promptmodel.create({content:question,
         role:"user"
       })
       const ai= new GoogleGenAI({
        apiKey:process.env.GEMINI_API_KEY
       })
     const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:question,
     })
     const aicontent= await promptmodel.create({
      content:response.text,
      role:"ai-model"
     })
     res.json({
        success:true,
        reply:aicontent.content,
        question:question
     })
   } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      err: error,
    });

}
}
const getgemini=(req,res)=>{
  try {
    const dataa=promptmodel.find();
  } catch (error) {
    
  }

}
module.exports=gemini