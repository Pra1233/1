const express=require('express');
const path=require('path');
const rootdir=require('../utils/path')

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','addproduct.html'))
   }
exports.postAddProduct= (req,res)=>{
    console.log(req.body);
    res.redirect('/');   
}   
exports.getContact=(req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'contact.html'));
  }

exports.getShop=(req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
  }  

exports.postSuccess=(req, res, next) => {
    res.send('<h1>Form successfuly filled </h1>');
  }