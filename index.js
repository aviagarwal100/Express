const express= require('express');
const app=express();
const hostname="127.0.0.1";
app.get("/About",(req,res)=>{
    res.status(500).json({user:'shyam'});
})

app.get("/About/:id",(req,res)=>{
    res.send(req.params);
    res.status(500);
})

app.post("/user",(req,res)=>{
    res.send("I am post");
})

app.listen(3000,hostname,()=>{
    console.log('the server is running 3000');
    
})