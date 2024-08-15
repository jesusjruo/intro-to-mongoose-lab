const mongoose = require('./connection');

const CustomerSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Customer = mongoose.model('customers' , CustomerSchema);

module.exports = Customer;