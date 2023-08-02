const express=require('express');
const path=require('path');
const fs=require('fs');
const router=express.Router();
const rootdir=require('../utils/path');

router.get('/',(req,res,next)=>{ 
    fs.readFile('abc.txt','utf-8',(e,data)=>{
        if(e){
            console.log(e);
            data='No Chat Exist';
        }
        res.send( 
            ` ${data}<form  onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
               action="/" method="POST">
             <input type="text" name="msg" id="msg" >
             <input type="text" name="username" id="username" >
             <button type="submit">Add Message</button>
             </form>`
               );    
    })

    })
    router.post('/',(req,res,next)=>{
        console.log(req.body);
        // let str=JSON.stringify(res.body);
     fs.writeFile('abc.txt',`${req.body.username}  ${req.body.msg}`,{flag:'a'},(e)=>{
       e ? console.log(e):res.redirect('/'); 
     })        
    })

module.exports=router;    