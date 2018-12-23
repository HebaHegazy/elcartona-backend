const { Client, validate } = require('../models/client');

exports.getClients = async (req, res) => {
    const clients = await Client.find();
    res.status(200).json({
        message: "All clients retrieved successfully",
        clients: clients
    })
}
exports.getClient = async (req, res) => {
    const client = await Client.findById(req.params.id);

    if (!client) return res.status(404).send('The client with the given ID was not found.');

    res.status(200).json({
        message: "a client is retrieved successfully",
        client: client
    })
}

exports.postClient = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);

    let client = new Client({
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
        cart:req.body.cart
    });
    client = await client.save();
    
    res.status(201).json({
        message: "a client is posted successfully",
        client: client
    })
}

exports.updateClient = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);

    const client = await Client.findByIdAndUpdate(req.params.id,
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
            cart:req.body.cart
        }, { new: true }); //{new: true} means ---- const Client is the updated one....

    if (!client) return res.status(404).send('The client with the given ID was not found.');

    res.status(200).json({
        message: "a client is updated successfully",
        client: client
    })
}

exports.deleteClient = async (req, res) => {
    const client = await Client.findByIdAndRemove(req.params.id);

    if (!client) return res.status(404).send('The client with the given ID was not found.');

    res.status(200).json({
        message: "a client is deleted successfully",
        client: client
    })
}

