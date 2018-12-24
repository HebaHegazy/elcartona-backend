const { Product, validate } = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.find()
    .select("-__v")
    .then(products => {
      res.status(200).json({
        message: "All products retrieved successfully",
        products: products
      });
    })
    .catch(err => res.status(422).json(err.message));
};

exports.getProduct = (req, res, next) => {
  Product.findById(req.params.id)
    .select("-__v")
    .then(product => {
      if (!product)
        return res
          .status(404)
          .send("The product with the given ID was not found.");
      res.status(200).json({
        message: "a product is retrieved successfully",
        product: product
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.postProduct = (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  let product = new Product({
    title: req.body.title,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    category: req.body.category
  });

  product
    .save()
    .then(product => {
      res.status(201).json({
        message: "a product is posted successfully",
        product: product
      });
    })
    .catch(err => res.status(422).json(err.message));
};

exports.updateProduct = (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  Product.findOneAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
      category: req.body.category
    },
    { new: true }
  ) ////{new: true} means ---- const Client is the updated one....
    .select("-__v")
    .then(product => {
      if (!product)
        return res
          .status(404)
          .send("The product with the given ID was not found.");

      res.status(200).json({
        message: "a product is updated successfully",
        product: product
      });
    })
    .catch(err => res.status(400).json(err.message));
};
exports.deleteProduct = (req, res, next) => {
  Product.findOneAndDelete(req.params.id)
    .select("-__v")
    .then(product => {
      if (!product)
        return res
          .status(404)
          .send("The product with the given ID was not found.");

      res.status(200).json({
        message: "a product is deleted successfully",
        product: product
      });
    })
    .catch(err => res.status(400).json(err.message));
};
