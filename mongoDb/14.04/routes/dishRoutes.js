const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const dishController = require('../controllers/dishController');
const authMiddleware = require('../middleware/authMiddleware');

//get all dishes
router.get('/dishes', dishController.getAllDishes);

//get dishes by category
router.get('/dishes/category/:category', authMiddleware, dishController.getCategoryDishes);

//add a new dish
router.post('/dishes', authMiddleware, [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').notEmpty().withMessage('Category is required')
], dishController.addDish);

//update a dish
router.put('/dishes/:id', authMiddleware, [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').notEmpty().withMessage('Category is required')
], dishController.updateDish);

//delete a dish
router.delete('/dishes/:id', authMiddleware, dishController.deleteDish);

module.exports = router;