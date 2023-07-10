const express =  require('express');
const app = express();


app.get('/', (req,res)=>{
    res.send("welcome to my awesome app")
})

app.listen(3500, (req,res)=>{
    console.log("server is running at 3500")
})