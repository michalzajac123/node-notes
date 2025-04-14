const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post(
    '/register',
    [
    body('username')
        .isLength({ min: 3}).withMessage('Username must be at least 3 characters long'),
        body('password')
        .isLength({ min: 6}).withMessage('Password must be at least 6 characters long'),
    ],
    authController.register
);

router.post(
    '/login',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    authController.login
);

router.get('/protected', authMiddleware, authController.protected);

module.exports = router;