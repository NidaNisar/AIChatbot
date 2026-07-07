import React, {  useState,useEffect, useContext } from 'react';
import './Chatbot.css'
import MessageHistory from '../message/Messagehistory';
import Respone from '../Response/Respone';
import Loading from '../../loading/Loading';
import { ChatContext } from '../../context/ChatContext';
const Chatbott = () => {
  // Statees
const{load,setload,fullprompt,setfullprompt,history,answer,setanswer,setCresponse,setmessageresponse}=useContext(ChatContext)
 
  // send Function

  const sendprompt= async(e)=>{
   const {value} = e.target;
 
  setfullprompt(value);
  }

  // get responsse
  const handleChange= async (e)=>{
    setmessageresponse(false)
    setCresponse('');
    
    const currentprompt=fullprompt;
    setload(true)
    e.preventDefault();
     try {
    const Cdata = await fetch("http://localhost:5000/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       question: currentprompt,
      }), 
    });
const reader=Cdata.body.getReader()
const decoder= new TextDecoder();
let resultd='';
while(true)
{
  
  const{value,done}= await reader.read()
  

   console.log("done value",done)
     if(done===false)
     {
      setload(false)
     }
  if (done)
  {
    break;
  }
   console.log("chunk:", decoder.decode(value));
  resultd+=decoder.decode(value,{stream:true})

setanswer({
      reply:resultd
    });
}
console.log("answer",answer)
    
    
   
    
    
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='mainchatbot'>
      <div> <h1>AI CHATBOT</h1></div>
    <div className='textarea'>
      <input className='textt' type='text' name='usertext' value={fullprompt} onChange={sendprompt} placeholder='Enter your text'/>
      <button  className='chatbtn' type='submit' disabled={load||fullprompt===''} onClick={handleChange} >{load?"Processing":"Send" }</button>
    </div>
    <MessageHistory messages={history} />
    
    <Loading load={load}/>
    <Respone answer={answer} />
    </div>
  );
}

export default Chatbott;
