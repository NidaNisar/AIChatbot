const {model,Schema}=require('mongoose');

const promptschema= new Schema({
    question:{
        type:String,
        require:true,
        
    },
    

});


const promptmodel= model("User",promptschema)

module.exports=promptmodel;