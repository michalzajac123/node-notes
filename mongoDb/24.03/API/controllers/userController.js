const User = require("../models/User");
const { validationResult } = require("express-validator");

const getUsers = async (req, res) =>{
    try{
        const users = await User.find().select("-password"); // Selecting all users except password
        res.send(200).json(users);
    } catch(err){
        res.status(500).json({error: "Błąd serwera"});
    }
}

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {name , email, password } = req.body;

    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({error: "Użytkownik już istnieje"});
        }
        user = new User({
            name,
            email,
            password
        })
        await user.save();

        res.status(201).json({message: "Użytkownik zarejestrowany"});
    } catch(err){
        res.status(500).json({error: "Błąd serwera"});
    }
}
const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {name, email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Niepoprawne dane"});
        }
        res.status(200).json({message: "Zalogowano"});
    } catch(err){
        res.status(500).json({error: "Błąd serwera"});
    }
}
module.exports = { getUsers, registerUser, loginUser }; // Exporting the functions  