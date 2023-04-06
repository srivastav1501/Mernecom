// const fs = require('fs');
const model = require('../model/product')
const Product = model.Product;
// const mongoose = require('mongoose');

exports.createProduct = (req,res)=>{
    const product = new Product(req.body); 
    product.save().then((result)=>{
        console.log(result)
        res.status(201).json(result);
    }).catch((err)=>res.status(400).json(err))
    
}

exports.getProduct = async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product)
}

exports.getAllProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products)
}




exports.replaceProducts = async(req,res)=>{
    const id = req.params.id;

    try{
        const product = await Product.findOneAndReplace({_id:id},req.body,{new:true});
        res.status(201).json(product);
    }
    catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}

exports.updateProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(201).json(product);
    }
    catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}

exports.deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findOneAndDelete({_id:id});
        res.status(201).json(product);
    }
    catch(err){
        console.log(err)
        res.status(400).json(err);
    }  
}