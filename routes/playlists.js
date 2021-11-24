// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist');

router.get('/',
    playlistController.getPlaylists
);

module.exports = router;