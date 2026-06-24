import React from 'react';
import './Chatbot.css'
const Chatbott = () => {
  return (
    <div>
      <div> <h1>AI CHATBOT</h1></div>
    <div className='textarea'>
      <input className='textt' type='text' name='text' placeholder='Enter your text'/>
      <button  className='chatbtn' type='submit'>Send</button>
    </div>
    </div>
  );
}

export default Chatbott;
