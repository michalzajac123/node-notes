const Ad = require('../models/Ad');
const { body, validationResult } = require('express-validator');

const getAllAds = async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ads', error: error.message });
    }
}

const addAd = async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, price, category, condition } = req.body;
        const ad = new Ad({ title, description, price, category, condition });
        await ad.save();
        res.status(201).json(ad);
    } catch (error) {
        res.status(500).json({ message: 'Error adding ad', error: error.message });
    }
}

module.exports = { getAllAds, addAd }; 
