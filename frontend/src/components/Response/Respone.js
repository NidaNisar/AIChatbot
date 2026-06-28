import React from 'react';
import './Respone.css'
const Respone = ({answer}) => {

  
  return (
    <div>
        <div className='response' > <p > {answer.reply}</p></div>
      
    </div>
  );
}

export default Respone;
