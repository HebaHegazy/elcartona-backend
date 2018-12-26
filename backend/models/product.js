const Joi = require("joi");
const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["البان", "حلويات", "منتجات غازية"],
      required: true,
      trim: true
    },
    barCode: {
      type: String
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  })
);

function validateProduct(product) {
  const schema = {
    title: Joi.string().required(),
    price: Joi.number().required(),
    imgUrl: Joi.string().required(),
    category: Joi.string().required(),
    barCode: Joi.string(),
    userId: Joi.ObjectId().required()
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
