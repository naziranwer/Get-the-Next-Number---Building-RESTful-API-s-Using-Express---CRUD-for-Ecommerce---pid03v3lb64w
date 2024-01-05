const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get("/api/:num",(req,res)=>{
       let {num}=req.params;
       num*=1;
       if(!isNaN(num)){
          res.send({'message':num+1, "status":"success"});
       }
       else{
        res.send({'message':"error", "status":"failure"});
       }
})

module.exports = app;
