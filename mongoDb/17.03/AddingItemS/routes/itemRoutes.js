const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

router.get('/items', ItemController.getItems); 
router.post("/items", ItemController.addItem);
router.put("/items/:id", ItemController.updateItem);
router.delete("/items/:id", ItemController.deleteItem);

module.exports = router; //eksportowanie routera