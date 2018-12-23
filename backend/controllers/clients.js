const { Client, validate } = require('../models/client');

exports.getClients = (req, res) => {
    Client.find().select('-__v').then((clients) => {
        res.status(200).json({
            message: "All clients retrieved successfully",
            clients: clients
        })
    }).catch(err => res.status(400).json(err.message));

}
exports.getClient = (req, res) => {
    Client.findById(req.params.id).select('-__v').then((client) => {
        if (!client) return res.status(404).send('The client with the given ID was not found.');
        res.status(200).json({
            message: "a client is retrieved successfully",
            client: client
        })

    }).catch(err => res.status(400).json(err.message));
}

exports.postClient = (req, res) => {
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
        cart: req.body.cart
    });
    client.save().then((client) => {
        res.status(201).json({
            message: "a client is posted successfully",
            client: client
        })
    }).catch(err => res.status(400).json(err.message));

}

exports.updateClient = (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);

    Client.findByIdAndUpdate(req.params.id,
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
            cart: req.body.cart
        }, { new: true }) ////{new: true} means ---- const Client is the updated one....
        .select('-__v').then((client) => {
            if (!client) return res.status(404).send('The client with the given ID was not found.');

            res.status(200).json({
                message: "a client is updated successfully",
                client: client
            })
        }).catch(err => res.status(400).json(err.message));
}

exports.deleteClient = (req, res) => {
    Client.findByIdAndRemove(req.params.id).select('-__v').then((client) => {
        if (!client) return res.status(404).send('The client with the given ID was not found.');

        res.status(200).json({
            message: "a client is deleted successfully",
            client: client
        })
    }).catch(err => res.status(400).json(err.message));
}

