const Video = require('../models/Video');

exports.getVideos = async (req, res, next) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (error) {
        console.log(error);
        next();
    }
}