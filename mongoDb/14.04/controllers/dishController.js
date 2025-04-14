const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Dish = require("../models/Dish");

exports.getAllDishes = async (req,res) => {
    const dishes = await Dish.find();

    if(!dishes) return res.status(404).json({message: "No dishes found"});

    res.status(200).json(dishes);
}
exports.getCategoryDishes = async (req,res) => {
    const {category} = req.params;
    const dishes = await Dish.find({category});
    if(!dishes) return res.status(404).json({message: "No dishes found"});
    res.status(200).json(dishes);
}
exports.addDish = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    const {name, description, price, category} = req.body;
    try{
        const dish = new Dish({name, description, price, category});
        await dish.save();
        res.status(201).json({message: "Dish added successfully"});
    } catch(err){
        res.status(400).json({message: "Invalid data", error: err.message});
    }
}
exports.updateDish = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    const {id} = req.params;
    const {name, description, price, category} = req.body;
    try{
        const dish = await Dish.findByIdAndUpdate(id, {name, description, price, category}, {new: true});
        if(!dish) return res.status(404).json({message: "Dish not found"});
        res.status(200).json({message: "Dish updated successfully"});
    } catch(err){
        res.status(400).json({message: "Invalid data", error: err.message});
    }
}
exports.deleteDish = async (req,res)=>{
    const {id} = req.params;
    try{
        const dish = await Dish.findByIdAndDelete(id);
        if(!dish) return res.status(404).json({message: "Dish not found"});
        res.status(200).json({message: "Dish deleted successfully"});
    } catch(err){
        res.status(400).json({message: "Invalid data", error: err.message});
    }
}