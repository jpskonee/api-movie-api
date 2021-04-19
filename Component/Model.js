const mongoose = require("mongoose")

const cartSchema = mongoose.Schema(
    {
        index: Number,
        title: String,
        overview: String,
        genres: String,
        vote_count: Number,
        release_date: Number,
        homepage: String
    });

module.exports = mongoose.model("films", cartSchema);
