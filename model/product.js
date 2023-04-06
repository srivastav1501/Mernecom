const mongoose = require('mongoose')
const { Schema } = mongoose;


// SCHEMA

const productSchema = new Schema({
    title: String,
    description: {type:String, requierd:true },
    price: {type:Number, min:[1,"Wrong min price"] , requierd:true},
    discountPercentage: {type:Number, min:[0,"Wrong min discount"], max:[50, "Wrong max discount"]},
    rating: {type:Number, min:[0,"Wrong min rating"], max:[5, "Wrong max rating"]},
    stock: {type:Number},
    brand:  {type:String},
    category:  {type:String},
    thumbnail:  {type:String, requierd:true},
    images: [String]
  });

exports.Product = mongoose.model('product', productSchema);