const { Shop, validate } = require("../models/shop");

exports.getShops = (req, res, next) => {
  Shop.find()
    .select("-__v")
    .then(shops => {
      res.status(200).json({
        message: "All clients retrieved successfully",
        shops: shops
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.getShopsAtSpecificArea = (req, res, next) => {
  //   console.log("specific shops", req.params);
  Shop.find({
    "address.city": req.params.city,
    "address.area": req.params.area
  })
    .select("-__v")
    .then(shops => {
      res.status(200).json({
        message: "All clients retrieved successfully",
        shops: shops
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.getProductsAtSpecificAreaAndShop = (req, res) => {
  Shop.find({ title: req.params.shopName })
    .populate("productIDs", "-__v -_id")
    .select("-__v")
    .then(shop => {
      if (!shop)
        return res
          .status(404)
          .send("The shop with the given ID was not found.");
      res.status(200).json({
        message: "a shop is retrieved successfully",
        shop: shop
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.getShop = (req, res, next) => {
  // console.log(req.params.id);
  Shop.findById(req.params.id)
    .select("-__v")
    .then(shop => {
      if (!shop)
        return res
          .status(404)
          .send("The shop with the given ID was not found.");
      res.status(200).json({
        message: "a shop is retrieved successfully",
        shop: shop
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.postShop = (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  let shop = new Shop({
    title: req.body.title,
    imgUrl: req.body.imgUrl,
    productIDs: req.body.productIDs,
    address: {
      city: req.body.address.city,
      area: req.body.address.area
    }
  });
  shop
    .save()
    .then(shop => {
      res.status(201).json({
        message: "a shop is posted successfully",
        shop: shop
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.updateShop = (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  Shop.findOneAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      productIDs: req.body.productIDs,
      address: {
        city: req.body.address.city,
        area: req.body.address.area
      }
    },
    { new: true }
  ) ////{new: true} means ---- const Client is the updated one....
    .select("-__v")
    .then(shop => {
      if (!shop)
        return res
          .status(404)
          .send("The shop with the given ID was not found.");

      res.status(200).json({
        message: "a shop is updated successfully",
        shop: shop
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.deleteShop = (req, res, next) => {
  Shop.findOneAndDelete(req.params.id)
    .select("-__v")
    .then(shop => {
      if (!shop)
        return res
          .status(404)
          .send("The shop with the given ID was not found.");

      res.status(200).json({
        message: "a shop is deleted successfully",
        shop: shop
      });
    })
    .catch(err => res.status(400).json(err.message));
};
