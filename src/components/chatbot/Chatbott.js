import React, { use, useState,useEffect } from 'react';
import './Chatbot.css'
import MessageHistory from '../message/Messagehistory';
import Respone from '../Response/Respone';
const Chatbott = () => {
  // Statees

  const[prompt,setprompt]=useState([]);
  const[fullprompt,setfullprompt]=useState({})
  const[history,sethistory]=useState([]);
  const[answer,setanswer]=useState([])
  // send Function

  const sendprompt=(e)=>{
   const {value,name} = e.target;
  
  setfullprompt((prev)=>({...prev,[name]:value}) )

  }

  // get responsse
  const handleChange= async (e)=>{
    e.preventDefault();
       try {
    const Rdata = await fetch("http://localhost:5000/api/getrespone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: fullprompt,
      }),
    });

    const responses = await Rdata.json();
    setanswer(responses);

    console.log(responses);
  } catch (error) {
    console.log(error);
  }
    console.log("fulltext",fullprompt)
    sethistory((prev)=>([...prev,fullprompt]))
    
  }
   useEffect(() => {
    console.log('history :', history);
  }, [history]);
  return (
    <div className='mainchatbot'>
      <div> <h1>AI CHATBOT</h1></div>
    <div className='textarea'>
      <input className='textt' type='text' name='usertext' value={fullprompt.usertext} onChange={sendprompt} placeholder='Enter your text'/>
      <button  className='chatbtn' type='submit' onClick={handleChange} >Send</button>
    </div>
    <MessageHistory messages={history}/>
    <Respone answer={answer} />
    </div>
  );
}

export default Chatbott;
