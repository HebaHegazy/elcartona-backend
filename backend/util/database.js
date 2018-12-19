const mongoose = require('mongoose');


exports.connect = ()=>{
    mongoose.connect('mongodb://localhost/ElcartonaShopping',{ useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));
};
