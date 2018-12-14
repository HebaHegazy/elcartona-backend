exports.getShops = (req, res, next) => {
    res.status(200).json({
        message: "All Shops retrieved successfully"
    })
}
exports.getShop = (req, res, next) => {
    res.status(200).json({
        message: "a Shop is retrieved successfully"
    })
}

exports.postShop = (req, res, next) => {
    res.status(201).json({
        message: "a Shop is posted successfully"
    })
}

exports.updateShop = (req, res, next) => {
    res.status(200).json({
        message: "a Shop is updated successfully"
    })
}
exports.deleteShop = (req, res, next) => {
    res.status(200).json({
        message: "a Shop is deleted successfully"
    })
}
