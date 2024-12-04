const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController'); 

// Define routes and associate them with controller functions
router.get('/items', itemsController.getAllItems);  
router.post('/items', itemsController.createItem);  

module.exports = router;
