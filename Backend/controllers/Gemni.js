const express=require('express');
const promptmodel = require('../model/promptt');
const { GoogleGenAI } = require("@google/genai");


const gemini= async(req,res)=>{
 
   try {
       const {question}=req.body
      
       const ai= new GoogleGenAI({
        apiKey:process.env.GEMINI_API_KEY
       })


     const response = await ai.models.generateContentStream({
        model:"gemini-2.5-flash",
        contents:question,
     })
     res.header("Content-type","text/plain; charset=utf-8")
     res.header("Transfer-Encoding","chunked")
let fulltext=''
console.log(response);
// console.log(Object.keys(response));
        for await ( let chunk of response)
        {
               const text=chunk.text;
               fulltext=fulltext+text;
               res.write(text) ; 
        }
        res.end();
        console.log(fulltext)
     const aicontent= await promptmodel.create({
      question:question,
      answer:fulltext
     })
    
   } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      err: error,
    });

}
}
const getgemini= async (req,res)=>{
   try {
    const data = await promptmodel.find().sort({ createdAt: 1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
 


}
 const deleteg= async(req,res)=>{
    try {
      const dell= await promptmodel.deleteMany()
       res.json({
      success: true,
      
    });
    } catch (error) {
      res.status(500).json({
      success: false,
      message: error.message,
    }); 
    }
  }
 
module.exports={gemini,getgemini,deleteg}