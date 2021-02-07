const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    town: { type: String, required: true },
    state: { type: String, required: true },
    date: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    zipCode: { type: Number, required: true }
    
});

module.exports = mongoose.model('Order', orderSchema);