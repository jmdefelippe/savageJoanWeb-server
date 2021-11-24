// rutas para crear redesSociales
const express = require('express');
const router = express.Router();
const socialNetworkController = require('../controllers/socialNetwork');

router.get('/',
    socialNetworkController.getSocialNetworks
);

module.exports = router;