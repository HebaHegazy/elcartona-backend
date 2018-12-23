var mongoose = require("mongoose");
const Joi = require('joi');
Joi.ObjectId= require('joi-objectid')(Joi);

const Order = mongoose.model('Order',
    new mongoose.Schema(
        {
            orderDate: { type: Date, default: Date.now },
            amount: { type: Number, required: true },
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        }
    ));
function validateOrder(order) {
    const schema = {
        amount: Joi.number().required(),
        userId:Joi.ObjectId().required(),
        productId:Joi.ObjectId().required()
    };
    return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validate = validateOrder;