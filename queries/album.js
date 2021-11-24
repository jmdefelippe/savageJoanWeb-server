const Album = require('../models/Album');

const getDiscography = async() => {
    return Album.find({});
}