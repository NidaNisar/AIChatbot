import React, { use, useState,useEffect } from 'react';
import './Chatbot.css'
import MessageHistory from '../message/Messagehistory';
import Respone from '../Response/Respone';
const Chatbott = () => {
  // Statees

  
  const[fullprompt,setfullprompt]=useState('')
  const[history,sethistory]=useState([]);
  const[answer,setanswer]=useState([])
  // send Function

  const sendprompt= async(e)=>{
   const {value,name} = e.target;
  //  setfullprompt((prev)=>({...prev,[name]:value}))
  setfullprompt(value);
  
       

  }

  // get responsse
  const handleChange= async (e)=>{
    const currentprompt=fullprompt;
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

    const PromptD= await Cdata.json();
    setanswer(PromptD);
    console.log(answer)
    sethistory((prev)=>([...prev,PromptD]))
    
    console.log( "Questions",PromptD);
  } catch (error) {
    console.log(error);
  }
      
   

    
    // setanswer(responses);

    
  
   
   
    
  }
   
  // UseEffect


   useEffect(() => {
    console.log('history :', history);
  }, [history]);
  return (
    <div className='mainchatbot'>
      <div> <h1>AI CHATBOT</h1></div>
    <div className='textarea'>
      <input className='textt' type='text' name='usertext' value={fullprompt} onChange={sendprompt} placeholder='Enter your text'/>
      <button  className='chatbtn' type='submit' onClick={handleChange} >Send</button>
    </div>
    <MessageHistory messages={history}/>
    <Respone answer={answer} />
    </div>
  );
}

export default Chatbott;
