const { Shop, validate } = require('../models/shop');


exports.getShops = (req, res, next) => {
    Shop.find({title: "shop1"}).then((shops)=>{
        res.status(200).json({
            message: "All clients retrieved successfully",
            shops: shops
        })
    }).catch(err => res.status(422).json(err.message));
}
exports.getShopsArea=(req, res, next) => {
    Shop.find({city:'القاهرة',area:'القاهرة'}).then((shops)=>{
        res.status(200).json({
            message: "All clients retrieved successfully",
            shops: shops
        })
    }).catch(err => res.status(422).json(err.message));
   
}


// exports.getShop = (req, res, next) => {
//     res.status(200).json({
//         message: "a Shop is retrieved successfully"
//     })
// }

exports.postShop = (req, res, next) => {
    let shop = new Shop({
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        productIDs: req.body.productIDs,
        address: {
            city: req.body.address.city,
            area: req.body.address.area
        }
    });
    shop.save().then((shop) => {
        res.status(201).json({
            message: "a shop is posted successfully",
            shop: shop
        })
    }).catch(err => res.status(422).json(err.message));
}

// exports.updateShop = (req, res, next) => {
//     res.status(200).json({
//         message: "a Shop is updated successfully"
//     })
// }

// exports.deleteShop = (req, res, next) => {
//     res.status(200).json({
//         message: "a Shop is deleted successfully"
//     })
// }
