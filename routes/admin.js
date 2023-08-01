const express=require('express');

const router=express.Router();//mini express

router.get('/add-product' ,(req,res,next)=>{
res.send('<html> <form action="/admin/add-product" method="POST"> <input type="text" name="key">  <input type="number" name="size"> <button type="submit">SUBMIT</button>  </form>  </html>');
    })
    
 router.post('/add-product', (req,res)=>{
        console.log(req.body);
        res.redirect('/shop');   
    })
module.exports=router; 
