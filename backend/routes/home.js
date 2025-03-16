const express = require('express');
const router = express.Router();
const { 
    getHello,
    getGoogleApiKey,
    getDashboard
} = require('../controllers/homeController.js');

//get homepage info (username + quote + author)
router.get('/hello', getHello);
router.get('/key', getGoogleApiKey);
router.get('/dashboard', getDashboard);


//export router
module.exports = router;