const express = require('express');
const router = express.Router();
const { 
    getHello
} = require('../controllers/homeController.js');

//get homepage info (username + quote + author)
router.get('/', getHello);

//export router
module.exports = router;