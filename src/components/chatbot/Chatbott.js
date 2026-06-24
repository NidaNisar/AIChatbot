import React, { use, useState,useEffect } from 'react';
import './Chatbot.css'
import MessageHistory from '../message/Messagehistory';
const Chatbott = () => {
  const[prompt,setprompt]=useState([]);
  const[fullprompt,setfullprompt]=useState({})
  const[history,sethistory]=useState([]);
  const sendprompt=(e)=>{
   const {value,name} = e.target;
  // setprompt(value);
  // console.log(value);
  setfullprompt((prev)=>({...prev,[name]:value}) )

  }
  const handleChange=(e)=>{
    e.preventDefault();
   
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
    </div>
  );
}

export default Chatbott;
