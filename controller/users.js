const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
const users = data.users;

exports.getProduct = (req,res)=>{
    const id = +req.params.id;
    const product = users.find(p=>p.id === id)
    res.json(product)
}

exports.getAllProducts = (req,res)=>{
    res.json(users);
}

exports.createProduct = (req,res)=>{
    const id = +req.params.id;
    const product = users.find(p=>p.id === id)
    product.title="Mukul"
    users.push(product)
    res.json(product)
}

exports.replaceProducts = (req,res)=>{
    const id = +req.params.id;
    const productIndex = users.findIndex(p=>p.id === id)
    users.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json()
}

exports.updateProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = users.findIndex(p=>p.id=== id)
    const product = users[productIndex];
    users.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json()
}

exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = users.findIndex(p=>p.id=== id)
    const product = users[productIndex];
    users.splice(productIndex,1)
    res.status(201).json(product)  
}