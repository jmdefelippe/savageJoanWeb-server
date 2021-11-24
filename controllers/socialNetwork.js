const SocialNetwork = require('../models/SocialNetwork');

exports.getSocialNetworks = async (req, res, next) => {
    try {
        const socialNetworks = await SocialNetwork.find({});
        res.json(socialNetworks);
    } catch (error) {
        console.log(error);
        next();
    }
}