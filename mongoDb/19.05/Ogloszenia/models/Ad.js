const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: false},
    condition: {type: String, required: false},
    createdAt: {type: Date, default: Date.now},
})

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;