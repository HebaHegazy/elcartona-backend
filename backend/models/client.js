const Joi = require('joi');
const mongoose = require('mongoose');

const Client = mongoose.model('Client', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateClient(client) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(client, schema);
}

exports.Client = Client; 
exports.validate = validateClient;