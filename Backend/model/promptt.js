const {model,Schema}=require('mongoose');

const promptschema= new Schema({
    question:{
        type:String,
        require:true,
        
    },
    answer:{
        type:String,
     
    }
   
    

},
      { timestamps:true}
);


const promptmodel= model("User",promptschema)

module.exports=promptmodel;
