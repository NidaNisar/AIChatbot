import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
   const[getmess,setgetmess]=useState([])
    const[load,setload]=useState(false)
     const[fullprompt,setfullprompt]=useState('')
     const[history,sethistory]=useState([]);
     const[answer,setanswer]=useState([])
     const[messageresponse,setmessageresponse]=useState(false)

    const getdata= async()=>{
    try {
       const Gdata = await fetch("http://localhost:5000/api/getgemini", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
         
       
      });
      const getd= await Gdata.json();
      
      setgetmess([...getd.data])
      
    } catch (error) {
      console.log(error)
    }
  
   }  
   const[Cresponse,setCresponse]=useState();
   const messageclick=(id)=>{
  setmessageresponse(true);
     const selectedMessage = getmess.find((msg) => msg._id === id);
    if(selectedMessage)

    {   

      setCresponse(selectedMessage.answer)

  }
    
  }

  return (
    <ChatContext.Provider
      value={{
       getmess,setgetmess,getdata,Cresponse,setCresponse,messageclick,load,setload,fullprompt,messageresponse,setmessageresponse,setfullprompt,history,sethistory,answer,setanswer
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};