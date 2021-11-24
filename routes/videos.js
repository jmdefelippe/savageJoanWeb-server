// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');

router.get('/',
    videoController.getVideos
);

module.exports = router;