var mongoose = require("mongoose");
const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);

const Shop = mongoose.model('Shop',
    new mongoose.Schema(
        {
            title: {
                type: String,
                // required: true,
            },
            imgUrl: {
                type: String,
                // required: true,
            },
            productIDs:[{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                // required: true
            }],
            address: {
                city: { 
                    type: String, 
                    enum:['القاهرة','الاسكندرية','طنطا','المنصورة','الاسماعليلية'],
                    // required: true
                 },
                area: {
                    type: String, 
                    enum:['التجمع','الرحاب','المعادي','مصر الجديدة','مدينة نصر'],
                    // required: true
                 }
            }
        }
    ));
function validateShop(shop) {
    const schema = {

    };
    return Joi.validate(shop, schema);
}

exports.Shop = Shop;
exports.validate = validateShop;