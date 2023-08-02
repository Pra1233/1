const express=require('express');
const path=require('path');
const router=express.Router();//mini express
const rootdir=require('../utils/path')

router.get('/add-product' ,(req,res,next)=>{
 res.sendFile(path.join(rootdir,'views','addproduct.html'))
//  res.sendFile(path.join(__dirname,'..','views','addproduct.html'))  
})
    
router.post('/add-product', (req,res)=>{
        console.log(req.body);
        res.redirect('/shop');   
    })
module.exports=router; 
