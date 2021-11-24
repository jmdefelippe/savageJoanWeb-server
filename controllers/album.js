const Album = require('../models/Album');

exports.getDiscography = async (req, res, next) => {
    try {
        const discography = await Album.find({});
        res.json(discography);
    } catch (error) {
        console.log(error);
        next();
    }
}