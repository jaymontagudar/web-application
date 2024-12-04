const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController'); // Ensure this path is correct

// Define routes and associate them with controller functions
router.get('/items', itemsController.getAllItems);  // This should work if getAllItems is defined correctly
router.post('/items', itemsController.createItem);  // Ensure this is correct as well

module.exports = router;
