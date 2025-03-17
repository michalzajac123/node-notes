const Car = require("../models/Car");

// pobieranie wszystkich samochodów
exports.getCars = async(req, res) => {
    const cars = await Car.find();
    res.json(cars);
}
// Dodawanie samochodu
exports.addCar = async(req, res) => {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.json(savedCar);
}
// Aktualizacja samochodu
exports.updateCar = async (req, res) => {
    try{
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(updatedCar);
    } catch(err){
        res.status(500).json({error: "Błąd aktualizacji samochodu"});
    }
}
//Usuwanie samochodow
exports.deleteCar = async(req, res) => { 
    try{
        await Car.findByIdAndDelete(req.params.id);
        res.json({message: "Samochód usunięty"});
    } catch(err){
        res.status(500).json({error: "Błąd usuwania samochodu"});
    }
}