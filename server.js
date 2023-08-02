const express=require('express');
const path= require('path');
const bodyParser=require('body-parser');
const app=express();

const message=require('./routes/message');
const user=require('./routes/user');

app.use(bodyParser.urlencoded({extended:false})); 
app.use(express.static(path.join(__dirname,'public'))); //css


app.use(message);
app.use('/',user);


app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
})

app.listen(3000);


