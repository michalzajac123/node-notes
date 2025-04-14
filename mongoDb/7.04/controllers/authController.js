const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//rejestracja
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const {username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({username, password: hashedPassword});

        await user.save();

        res.status(201).json({ message: 'User registered'}) 
    } catch (err){
        res.status(400).json({ error: 'User already exists or invalid data'});
    }
};

//logowanie

exports.login = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const {username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({error: 'User not found' })
        
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: 'Invalid password' })

        //token generowanie
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1h'//token ważny godzinę
        });
        res.json({message: 'Logged in', token});
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong :('})
    }
};

exports.protected = (req, res) => {
    res.json({ message: 'you have access to protected route', userId: req.user.id });
};