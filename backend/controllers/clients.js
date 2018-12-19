const { Client, validate } = require('../models/client');

exports.getClients = async (req, res) => {
    const clients = await Client.find().sort('name');
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
    if (error) return res.status(400).send(error.details[0].message);

    let client = new Client({
        name: req.body.name,
        phone: req.body.phone
    });
    client = await client.save();

    res.status(201).json({
        message: "a client is posted successfully",
        client: client
    })
}

exports.updateClient = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const client = await Client.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            phone: req.body.phone
        }, { new: true });

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

