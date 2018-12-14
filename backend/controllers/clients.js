exports.getClients = (req, res, next) => {
    res.status(200).json({
        message: "All clients retrieved successfully"
    })
}
exports.getClient = (req, res, next) => {
    res.status(200).json({
        message: "a client is retrieved successfully"
    })
}

exports.postClient = (req, res, next) => {
    const name = req.body.name;
    const age =req.body.age;
    res.status(201).json({
        message: "a client is posted successfully",
        client :{name : name , age:age}
    })
}

exports.updateClient = (req, res, next) => {
    res.status(200).json({
        message: "a client is updated successfully"
    })
}
exports.deleteClient = (req, res, next) => {
    res.status(200).json({
        message: "a client is deleted successfully"
    })
}
