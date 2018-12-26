const Joi = require("joi");
Joi.ObjectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fullName: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true }
    },
    address: {
      city: { type: String, required: true },
      area: { type: String, required: true }
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    userRole: {
      type: String,
      required: true
    },
    cart: {
      items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
          },
          quantity: { type: Number, required: true }
        }
      ]
    }
  })
);
function validateUser(user) {
  const schema = {
    fullName: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    }),
    address: Joi.object().keys({
      city: Joi.string().required(),
      area: Joi.string().required()
    }),
    phone: Joi.string()
      .required()
      .regex(/^(01)[0-9]{9}$/)
      .error(err => "Phone must be eleven numbers"),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{10,}$/)
      .error(
        err =>
          "Password must contain at least one letter, at least one number, and be longer than ten charaters."
      ),
    userRole: Joi.string().required(),
    cart: Joi.object().keys({
      items: Joi.array().items(
        Joi.ObjectId().required(),
        Joi.number().required()
      )
    })
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
