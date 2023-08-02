

const express=require('express');
const path=require('path');
const router=express.Router();
const rootdir=require('../utils/path');

router.get('/login',(req,res,next)=>{
res.sendFile(path.join(rootdir,'views','user.html'));
})

router.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
module.exports=router;

