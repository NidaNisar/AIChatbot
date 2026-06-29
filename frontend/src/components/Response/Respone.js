import React from 'react';
import './Respone.css'
import Loading from '.././../loading/Loading';
const Respone = ({answer}) => {

  
  return (
    <div>
      {/* <Loading/> */}
        <div className='response' > <p > {answer.reply}</p></div>
      
    </div>
  );
}

export default Respone;
