exports.getShopOwners = (req, res, next) => {
    res.status(200).json({
        message: "All ShopOwners retrieved successfully"
    })
}
exports.getShopOwner = (req, res, next) => {
    res.status(200).json({
        message: "a ShopOwner is retrieved successfully"
    })
}

exports.postShopOwner = (req, res, next) => {
    res.status(201).json({
        message: "a ShopOwner is posted successfully"
    })
}

exports.updateShopOwner = (req, res, next) => {
    res.status(200).json({
        message: "a ShopOwner is updated successfully"
    })
}
exports.deleteShopOwner = (req, res, next) => {
    res.status(200).json({
        message: "a ShopOwner is deleted successfully"
    })
}
