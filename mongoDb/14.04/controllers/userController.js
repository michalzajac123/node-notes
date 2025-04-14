const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//register a new user

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { username, password, email } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({username, password: hashedPassword, email});
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch(err){
        res.status(400).json({ message: 'User already exists or invalid data', error: err.message });
    }
}

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const { email,password } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({error: "User not found"});

        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(401).json({error:"Invalid password"});

        //token generowanie
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1h'// token wazny godzine
        });
        res.json({message: "Logged in", token});
    } catch (err) {
        res.status(500).json({error: "Something went wrong :("});
    }
}