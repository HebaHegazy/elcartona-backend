exports.getAreas = (req, res, next) => {
    res.status(200).json({
        message: "All Areas retrieved successfully"
    })
}
exports.getArea = (req, res, next) => {
    res.status(200).json({
        message: "a Area is retrieved successfully"
    })
}

exports.postArea = (req, res, next) => {
    res.status(201).json({
        message: "a Area is posted successfully"
    })
}

exports.updateArea = (req, res, next) => {
    res.status(200).json({
        message: "a Area is updated successfully"
    })
}
exports.deleteArea = (req, res, next) => {
    res.status(200).json({
        message: "a Area is deleted successfully"
    })
}
