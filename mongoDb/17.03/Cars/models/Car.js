const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    carBand:String,
    model:String,
    carYear:Number,
    mileage:Number,
    fuel:String, 
    RegistrationNumber: String
})

const Car = mongoose.model("Car",carSchema);

module.exports = Car; 