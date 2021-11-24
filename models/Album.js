const mongoose = require('mongoose');

const { required, minLenght, maxLenght } = require("../const/index");

const AlbumSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, required()],
        },
        artist: {
            type: String,
            required: [true, required()],
            trim: true,
            minLength: [1, minLenght(1)],
            maxLength: [100, maxLenght(100)],
        },
        title: {
            type: String,
            required: [true, required()],
            trim: true,
            minLength: [1, minLenght(1)],
            maxLength: [100, maxLenght(100)],
        },
        year: {
            type: Number,
            required: [true, required()],
        },
        urlImage: {
            type: String,
            required: [true, required()],
            trim: true,
            minLength: [1, minLenght(1)],
            maxLength: [300, maxLenght(300)],
        },
        urlYoutube: {
            type: String,
            required: [true, required()],
            trim: true,
            minLength: [1, minLenght(1)],
            maxLength: [300, maxLenght(300)],
        },
        urlSpotify: {
            type: String,
            required: [true, required()],
            trim: true,
            minLength: [1, minLenght(1)],
            maxLength: [300, maxLenght(300)],
        },
        songs: [
            {
                number: {
                    type: Number,
                    required: [true, required()]
                }, 
                title: {
                    type: String,
                    required: [true, required()],
                    minLength: [1, minLenght(1)],
                    maxLength: [100, maxLenght(100)],
                },
                author: {
                    type: String,
                    required: [true, required()],
                    minLength: [1, minLenght(1)],
                    maxLength: [100, maxLenght(100)],
                },
                urlYoutube: {
                    type: String,
                    required: [true, required()],
                    trim: true,
                    minLength: [1, minLenght(1)],
                    maxLength: [300, maxLenght(300)],
                },
                urlSpotify: {
                    type: String,
                    required: [true, required()],
                    trim: true,
                    minLength: [1, minLenght(1)],
                    maxLength: [300, maxLenght(300)],
                },
                lyrics: {
                    type: String,
                    required: false
                },
            }
        ]
    },
    {
        autoCreate: true,
        collection: 'discography'
    }
);

module.exports = mongoose.model('Album', AlbumSchema);