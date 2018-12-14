exports.getProducts = (req, res, next) => {
    res.status(200).json({
        message: "All Products retrieved successfully"
    })
}
exports.getProduct = (req, res, next) => {
    res.status(200).json({
        message: "a Product is retrieved successfully"
    })
}

exports.postProduct = (req, res, next) => {
    res.status(201).json({
        message: "a Product is posted successfully"
    })
}

exports.updateProduct = (req, res, next) => {
    res.status(200).json({
        message: "a Product is updated successfully"
    })
}
exports.deleteProduct = (req, res, next) => {
    res.status(200).json({
        message: "a Product is deleted successfully"
    })
}
