import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
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

  return (
    <ChatContext.Provider
      value={{
       getmess,setgetmess,getdata
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};