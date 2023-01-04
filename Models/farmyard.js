const mongoose = require('mongoose');

const farmyardSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model("Farmyard", farmyardSchema)
