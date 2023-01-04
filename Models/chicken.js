const mongoose = require('mongoose');
const FarmyardModel = require('./farmyard');


const modelSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    birthday: {
        required: false,
        type: Date
    },
    weight: {
        required: true,
        type: Number
    },
    steps: {
        type: Number,
        default: 0,
    },
    isRunning: {
        type: Boolean,
        default: false,
    },
    farmyard: {
        required: true,
        type: mongoose.Types.ObjectId, 
        ref: "Farmyard"
    }
})

module.exports = mongoose.model('Data', modelSchema)