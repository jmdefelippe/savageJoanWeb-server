const Playlist = require('../models/Playlist');

exports.getPlaylists = async (req, res, next) => {
    try {
        const playlists = await Playlist.find({});
        res.json(playlists);
    } catch (error) {
        console.log(error);
        next();
    }
}