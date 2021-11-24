// rutas para crear albumes
const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album');

router.get('/',
    albumController.getDiscography
);

module.exports = router;