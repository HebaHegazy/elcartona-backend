const Joi = require('joi');
const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgURL:{
    type: String,
    required: true, 
  }
}));

function validateProduct(client) {
    const schema = {
      title: Joi.string().required(),
      price: Joi.number().required(),
      imgURL:Joi.string().required
    };
  
    return Joi.validate(client, schema);
  }
  
  exports.Product = Product; 
  exports.validate = validateProduct;