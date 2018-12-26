const { User, validate } = require("../models/user");

exports.getUsers = (req, res) => {
  User.find()
    .select("-__v")
    .then(users => {
      res.status(200).json({
        message: "All users retrieved successfully",
        users: users
      });
    })
    .catch(err => res.status(400).json(err.message));
};
exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .select("-__v")
    .then(user => {
      if (!user)
        return res
          .status(404)
          .send("The user with the given ID was not found.");
      res.status(200).json({
        message: "a user is retrieved successfully",
        user: user
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.postUser = (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  let user = new User({
    fullName: {
      firstName: req.body.fullName.firstName,
      lastName: req.body.fullName.lastName
    },
    address: {
      city: req.body.address.city,
      area: req.body.address.area
    },
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    userRole: req.body.userRole,
    cart: req.body.cart
  });

  user
    .save()
    .then(user => {
      res.status(201).json({
        message: "a user is posted successfully",
        user: user
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.updateUser = (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  User.findOneAndUpdate(
    req.params.id,
    {
      fullName: {
        firstName: req.body.fullName.firstName,
        lastName: req.body.fullName.lastName
      },
      address: {
        city: req.body.address.city,
        area: req.body.address.area
      },
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      userRole: req.body.userRole,
      cart: req.body.cart
    },
    { new: true }
  ) ////{new: true} means ---- const user is the updated one....
    .select("-__v")
    .then(user => {
      if (!user)
        return res
          .status(404)
          .send("The user with the given ID was not found.");

      res.status(200).json({
        message: "a user is updated successfully",
        user: user
      });
    })
    .catch(err => res.status(400).json(err.message));
};

exports.deleteUser = (req, res) => {
  User.findOneAndDelete(req.params.id)
    .select("-__v")
    .then(user => {
      if (!user)
        return res
          .status(404)
          .send("The user with the given ID was not found.");

      res.status(200).json({
        message: "a user is deleted successfully",
        user: user
      });
    })
    .catch(err => res.status(400).json(err.message));
};
