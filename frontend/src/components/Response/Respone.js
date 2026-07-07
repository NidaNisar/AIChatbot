import React, { useContext } from 'react';
import './Respone.css'

import { ChatContext } from '../../context/ChatContext';

const Respone = ({answer}) => {
  const{Cresponse}=useContext(ChatContext)

return (
    <div className='response-wrapper'>
      
      
        <div className='response' > <p> {Cresponse ? Cresponse : answer.reply}</p></div>
      
    </div>
  );
}

export default Respone;
