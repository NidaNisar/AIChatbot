import React, { useEffect, useState } from 'react';
import './Messagehistory.css';

const MessageHistory = () => {
  const[getmess,setgetmess]=useState([])
  const getdata= async()=>{
  try {
     const Gdata = await fetch("http://localhost:5000/api/getgemini", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
       
     
    });
    const getd= await Gdata.json();
    console.log("getd",getd)
    setgetmess([...getd.data])
    
  } catch (error) {
    console.log(error)
  }

 }   
useEffect(() => {

   getdata();
   console.log("history",getmess)
  }, [getmess]);
  return (
    <div className='mainrecents'>
      <div className='recents'>
        <h1>Recents</h1>
      </div>
      <div className='message-list'>
        {getmess.length === 0 ? (
          <p className='empty'>No message yet</p>
        ) : (
          getmess.map((msg, index) => (
            <p key={index} className='message-item'>
              {msg.question}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageHistory;