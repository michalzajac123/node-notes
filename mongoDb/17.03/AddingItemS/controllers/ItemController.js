const Item = require("../models/Item");
// pobieranie wszystklich przedmiotów
exports.getItems = async (req,res) => {
    const items = await Item.find();
    res.json(items);
}

//Dodawanie przedmiotu

exports.addItem = async (req,res) => {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
}

//aktualizacja przemiotu
exports.updateItem = async (req,res) => {
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body , {new:true});
        res.json(updatedItem);
    } catch(err){
        res.status(500).json({error: "Błąd aktulaziacji przedmiotu"});
    }
}

//Usuwanie przedmiotu 
exports.deleteItem = async(req,res) => {
    try{
        await Item.findOneAndDelete(req.params.id);
        res.json({message: "Przedmiot usunięty"});
    } catch(err){
        res.status(500).json({error: "Błąd usuwania przedmiotu"});
    } 
}