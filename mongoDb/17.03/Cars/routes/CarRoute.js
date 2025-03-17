const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

router.get("/cars", CarController.getCars);
router.post("/cars", CarController.addCar);
router.put("/cars/:id", CarController.updateCar);
router.delete("/cars/:id", CarController.deleteCar);

module.exports = router; //eksportowanie routera