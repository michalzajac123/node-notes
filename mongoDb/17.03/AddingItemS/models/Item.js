const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true, //jest wymagane
        unique: true //musi być uniklan y
    }
})
module.exports = mongoose.model("Item", ItemSchema); // eskportyheny model Item