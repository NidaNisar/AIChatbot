import React, { useContext } from 'react';
import './Respone.css'
import Loading from '.././../loading/Loading';
import { ChatContext } from '../../context/ChatContext';

const Respone = ({answer}) => {
  const{Cresponse,load,messageresponse}=useContext(ChatContext)
return (
    <div>
      
        <div className='response' > <p> {Cresponse ? Cresponse : answer.reply}</p></div>
      
    </div>
  );
}

export default Respone;
