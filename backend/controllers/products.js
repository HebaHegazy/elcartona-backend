const { Product, validate } = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.find().then((products)=>{
        res.status(200).json({
            message: "All products retrieved successfully",
            products: products
        })
    }).catch(err => res.status(422).json(err.message))
}

// exports.getProduct = (req, res, next) => {
//     res.status(200).json({
//         message: "a Product is retrieved successfully"
//     })
// }

exports.postProduct =  (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);
    let product = new Product({
        title: req.body.title,
        price: req.body.price,
        imgUrl:req.body.imgUrl,
        category: req.body.category
    });

    product.save().then((product) => {
        res.status(201).json({
            message: "a product is posted successfully",
            product: product
        })
    }).catch(err => res.status(422).json(err.message));
}

// exports.updateProduct = (req, res, next) => {
//     res.status(200).json({
//         message: "a Product is updated successfully"
//     })
// }
// exports.deleteProduct = (req, res, next) => {
//     res.status(200).json({
//         message: "a Product is deleted successfully"
//     })
// }
