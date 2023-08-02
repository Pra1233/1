const express=require('express');
const path= require('path');
const bodyParser=require('body-parser');
const app=express();

const addproduct=require('./routes/admin');
const shop=require('./routes/shop');
const contact=require('./routes/contact');
const success=require('./routes/success');

app.use(bodyParser.urlencoded({extended:false})); 
app.use(express.static(path.join(__dirname,'public'))); //css

app.use('/admin',addproduct);
app.use(shop);
app.use(contact);
app.use(success);


app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
})

app.listen(3000);


