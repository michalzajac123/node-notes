const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { getAllAds, addAd } = require('../controllers/AdController');

router.get('/ads', getAllAds);
router.post('/ads', [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().notEmpty().withMessage('Price is required'),
    body('category').optional(),
    body('condition').optional(),
], addAd);

module.exports = router;
